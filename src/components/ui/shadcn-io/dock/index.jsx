"use client";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Children,
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { cn } from "@/components/lib/utils";
import { BorderBeam } from "../../border-beam";

const DOCK_HEIGHT = 128;
const DEFAULT_MAGNIFICATION = 80;
const DEFAULT_DISTANCE = 150;
const DEFAULT_PANEL_HEIGHT = 64;

const DockContext = createContext(undefined);

function DockProvider({ children, value }) {
  return <DockContext.Provider value={value}>{children}</DockContext.Provider>;
}

function useDock() {
  const context = useContext(DockContext);
  if (!context) {
    throw new Error("useDock must be used within a DockProvider");
  }
  return context;
}

function Dock({
  children,
  className,
  spring = { mass: 0.12, stiffness: 150, damping: 16 },
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  panelHeight = DEFAULT_PANEL_HEIGHT,
}) {
  // track cursor X across the viewport
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxHeight = useMemo(() => {
    return Math.max(DOCK_HEIGHT, magnification + magnification / 2 + 4);
  }, [magnification]);

  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  return (
    <motion.div
      style={{
        height: height,
        scrollbarWidth: "none",
      }}
      className="mx-2 flex max-w-full items-end overflow-x-auto "
    >
      <motion.div
        // use clientX so value is viewport-relative (consistent for responsive layouts)
        onMouseMove={({ clientX }) => {
          isHovered.set(1);
          mouseX.set(clientX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={cn(
          // glassy container with subtle ring and shadow — matches modern dark themes
          " mx-auto flex w-fit gap-4 rounded-2xl px-4 py-3 bg-gradient-to-t from-[#081017]/50 to-[#0d1822]/50 backdrop-blur-sm border border-transparent",
          "shadow-[0_8px_30px_rgba(2,6,23,0.6)] border-3 border-[#68B5EC]",
          "ring-1 ring-[#68B5EC]/8 focus-within:ring-2 focus-within:ring-[#68B5EC]/18",
          className
        )}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        <DockProvider value={{ mouseX, spring, distance, magnification }}>
          {children}
        </DockProvider>
      </motion.div>
    </motion.div>
  );
}

function DockItem({ children, className }) {
  const ref = useRef(null);

  const { distance, magnification, mouseX, spring } = useDock();

  const isHovered = useMotionValue(0);

  // mouseDistance is computed relative to the center of this item
  const mouseDistance = useTransform(mouseX, (val) => {
    const domRect = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - (domRect.x + domRect.width / 2);
  });

  const widthTransform = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [40, magnification, 40]
  );

  const width = useSpring(widthTransform, spring);

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      className={cn(
        // rounded button look with accessible focus + smooth transition
        "relative inline-flex items-center justify-center rounded-full p-1 border-1 border-[#68B5EC] p-2 transition-all",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#68B5EC]/40",
        className
      )}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children, (child) =>
        cloneElement(child, { width, isHovered })
      )}
    </motion.div>
  );
}

function DockLabel({ children, className, ...rest }) {
  const restProps = rest;
  const isHovered = restProps["isHovered"];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on("change", (latest) => {
      setIsVisible(latest === 1);
    });

    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className={cn(
            // center with tailwind transforms instead of style x (more robust)
            "absolute -top-6 left-1/2 transform -translate-x-1/2 w-fit whitespace-pre rounded-md border bg-[#161A21]  px-2 py-0.5 text-xs md:text-md text-[#68B5EC] border-[#68B5EC] shadow-sm",
            className
          )}
          role="tooltip"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className, ...rest }) {
  const restProps = rest;
  const width = restProps["width"];

  // icon container scales in proportion to the computed width
  const widthTransform = useTransform(width, (val) => Math.max(28, val / 2));

  return (
    <motion.div
      style={{ width: widthTransform }}
      className={cn(
        // keep icon centered, prevent icon overflow, and allow nice scaling
        "flex items-center justify-center pointer-events-none",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export { Dock, DockIcon, DockItem, DockLabel };
