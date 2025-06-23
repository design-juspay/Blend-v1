import "./GradientBlur.css";

/**
 * @description A decorative animated gradient background component that creates dynamic, blurred gradient circles for visual enhancement.
 * Perfect for hero sections, landing pages, and creating engaging background effects with smooth animations and customizable positioning.
 * @feature Renders multiple animated gradient circles with smooth transitions
 * @feature Creates dynamic, blurred background effects for visual appeal
 * @feature Fully responsive design that adapts to container dimensions
 * @feature Pure CSS animations for optimal performance
 * @feature No props required - works out of the box
 * @feature Easily customizable through CSS variables and styling
 * @feature Lightweight with minimal performance impact
 * @feature Accessible - purely decorative with no interactive elements
 * @example Basic Background Effect
 * ```tsx
 * import { GradientBlur } from "blend-v1";
 * 
 * <div style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
 *   <GradientBlur />
 *   <div style={{ position: 'relative', zIndex: 1, padding: '40px', textAlign: 'center' }}>
 *     <h1 style={{ color: 'white' }}>Welcome</h1>
 *   </div>
 * </div>
 * ```
 * @example Intermediate Card Background
 * ```tsx
 * import { GradientBlur } from "blend-v1";
 * 
 * <div style={{ 
 *   position: 'relative', 
 *   width: '300px', 
 *   height: '200px',
 *   borderRadius: '12px',
 *   overflow: 'hidden'
 * }}>
 *   <GradientBlur />
 *   <div style={{ 
 *     position: 'absolute',
 *     inset: 0,
 *     background: 'rgba(0, 0, 0, 0.3)',
 *     backdropFilter: 'blur(2px)'
 *   }} />
 *   <div style={{ position: 'relative', zIndex: 1, padding: '24px' }}>
 *     <h3 style={{ color: 'white', margin: 0 }}>Feature Card</h3>
 *     <p style={{ color: 'rgba(255, 255, 255, 0.8)', margin: '8px 0 0 0' }}>
 *       Beautiful background effect
 *     </p>
 *   </div>
 * </div>
 * ```
 * @example Advanced with Multiple Overlays
 * ```tsx
 * import { GradientBlur } from "blend-v1";
 * 
 * <div style={{ 
 *   position: 'relative', 
 *   width: '100%',
 *   minHeight: '400px',
 *   borderRadius: '16px',
 *   overflow: 'hidden'
 * }}>
 *   <GradientBlur />
 *   <div style={{ 
 *     position: 'absolute',
 *     inset: 0,
 *     background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.1) 100%)',
 *     backdropFilter: 'blur(3px)'
 *   }} />
 *   <div style={{ position: 'relative', zIndex: 1, padding: '48px' }}>
 *     <h1 style={{ color: 'white', fontSize: '2.5rem', margin: '0 0 16px 0' }}>
 *       Dashboard
 *     </h1>
 *     <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.1rem' }}>
 *       Advanced gradient background with overlay effects
 *     </p>
 *   </div>
 * </div>
 * ```
 */
const GradientBlur = () => {
  return (
    <div className="gradient-blur">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default GradientBlur;
