import Block from "../Primitives/Block/Block";
import { forwardRef } from "react";

import Text from "../Text/Text";
import { TagColor, TagProps, TagShape, TagSize, TagVariant } from "./types";
import { useComponentToken } from "../../context/useComponentToken";
import { TagTokensType } from "./tag.tokens";

/**
 * @description A versatile label component for displaying keywords, categories, status indicators, and interactive elements.
 * Essential for organizing content, showing metadata, and creating intuitive user interfaces with consistent visual styling and behavior.
 * @feature Multiple visual variants (subtle, attentive, no-fill, filled) for different emphasis levels
 * @feature Comprehensive color palette (neutral, primary, success, error, warning, info)
 * @feature Flexible sizing options (SM, MD, LG) for various interface contexts
 * @feature Shape customization (rounded, squarical) for design consistency
 * @feature Optional leading and trailing slots for icons and interactive elements
 * @feature Click handler support for interactive tags and filtering
 * @feature Split tag positioning for connected tag groups
 * @feature Accessible design with proper ARIA attributes and keyboard support
 * @example Basic Tag Usage
 * ```tsx
 * import { Tag, TagVariant, TagColor, TagSize, TagShape } from "blend-v1";
 * import { CheckCircle, AlertCircle, Info } from "lucide-react";
 * 
 * function StatusTags() {
 *   return (
 *     <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
 *       <Tag
 *         text="Active"
 *         variant={TagVariant.SUBTLE}
 *         color={TagColor.SUCCESS}
 *         size={TagSize.MD}
 *         shape={TagShape.ROUNDED}
 *         leftSlot={<CheckCircle size={14} />}
 *       />
 *       
 *       <Tag
 *         text="Pending"
 *         variant={TagVariant.ATTENTIVE}
 *         color={TagColor.WARNING}
 *         size={TagSize.MD}
 *         leftSlot={<AlertCircle size={14} />}
 *       />
 *       
 *       <Tag
 *         text="Info"
 *         variant={TagVariant.SUBTLE}
 *         color={TagColor.INFO}
 *         size={TagSize.SM}
 *         leftSlot={<Info size={12} />}
 *       />
 *     </div>
 *   );
 * }
 * ```
 * @example Intermediate Interactive Tag Filter
 * ```tsx
 * import { Tag, TagVariant, TagColor, TagSize, TagShape } from "blend-v1";
 * import { useState } from "react";
 * import { X, Filter, Plus } from "lucide-react";
 * 
 * function TagFilter() {
 *   const [selectedTags, setSelectedTags] = useState<string[]>(['javascript', 'react']);
 *   const [availableTags] = useState([
 *     'javascript', 'react', 'typescript', 'vue', 'angular', 'nodejs', 'python', 'design'
 *   ]);
 * 
 *   const handleTagToggle = (tag: string) => {
 *     setSelectedTags(prev => 
 *       prev.includes(tag) 
 *         ? prev.filter(t => t !== tag)
 *         : [...prev, tag]
 *     );
 *   };
 * 
 *   const clearAllTags = () => setSelectedTags([]);
 * 
 *   return (
 *     <div style={{ padding: '20px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
 *       <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
 *         <Filter size={18} color="#6b7280" />
 *         <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#1f2937' }}>
 *           Filter by Skills
 *         </h3>
 *         {selectedTags.length > 0 && (
 *           <button 
 *             onClick={clearAllTags}
 *             style={{ 
 *               background: 'none', 
 *               border: 'none', 
 *               color: '#6b7280', 
 *               fontSize: '14px',
 *               cursor: 'pointer',
 *               textDecoration: 'underline'
 *             }}
 *           >
 *             Clear all
 *           </button>
 *         )}
 *       </div>
 * 
 *       <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
 *         {availableTags.map(tag => (
 *           <Tag
 *             key={tag}
 *             text={tag.charAt(0).toUpperCase() + tag.slice(1)}
 *             variant={selectedTags.includes(tag) ? TagVariant.ATTENTIVE : TagVariant.SUBTLE}
 *             color={selectedTags.includes(tag) ? TagColor.PRIMARY : TagColor.NEUTRAL}
 *             size={TagSize.MD}
 *             shape={TagShape.ROUNDED}
 *             onClick={() => handleTagToggle(tag)}
 *             rightSlot={selectedTags.includes(tag) ? <X size={14} /> : <Plus size={14} />}
 *           />
 *         ))}
 *       </div>
 * 
 *       {selectedTags.length > 0 && (
 *         <div style={{ 
 *           padding: '12px', 
 *           backgroundColor: 'white', 
 *           borderRadius: '6px',
 *           border: '1px solid #e5e7eb'
 *         }}>
 *           <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#6b7280' }}>
 *             Selected filters ({selectedTags.length}):
 *           </p>
 *           <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
 *             {selectedTags.map(tag => (
 *               <Tag
 *                 key={`selected-${tag}`}
 *                 text={tag.charAt(0).toUpperCase() + tag.slice(1)}
 *                 variant={TagVariant.ATTENTIVE}
 *                 color={TagColor.PRIMARY}
 *                 size={TagSize.SM}
 *                 shape={TagShape.ROUNDED}
 *                 rightSlot={<X size={12} />}
 *                 onClick={() => handleTagToggle(tag)}
 *               />
 *             ))}
 *           </div>
 *         </div>
 *       )}
 *     </div>
 *   );
 * }
 * ```
 * @example Advanced Tag Management System
 * ```tsx
 * import { Tag, TagVariant, TagColor, TagSize, TagShape } from "blend-v1";
 * import { useState } from "react";
 * import { 
 *   Star, 
 *   Calendar, 
 *   User, 
 *   AlertTriangle, 
 *   CheckCircle, 
 *   Clock,
 *   X,
 *   MoreHorizontal 
 * } from "lucide-react";
 * 
 * function ProjectTagManager() {
 *   const [tags, setTags] = useState([
 *     { id: 1, text: "High Priority", color: TagColor.ERROR, icon: AlertTriangle, category: "priority" },
 *     { id: 2, text: "Frontend", color: TagColor.PRIMARY, icon: Star, category: "team" },
 *     { id: 3, text: "Due Today", color: TagColor.WARNING, icon: Calendar, category: "deadline" },
 *     { id: 4, text: "Reviewed", color: TagColor.SUCCESS, icon: CheckCircle, category: "status" },
 *     { id: 5, text: "In Progress", color: TagColor.INFO, icon: Clock, category: "status" },
 *     { id: 6, text: "Sarah Johnson", color: TagColor.NEUTRAL, icon: User, category: "assignee" }
 *   ]);
 * 
 *   const [hoveredTag, setHoveredTag] = useState<number | null>(null);
 *   const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
 * 
 *   const removeTag = (id: number) => {
 *     setTags(prev => prev.filter(tag => tag.id !== id));
 *   };
 * 
 *   const getTagVariant = (category: string) => {
 *     switch (category) {
 *       case 'priority': return TagVariant.ATTENTIVE;
 *       case 'status': return TagVariant.SUBTLE;
 *       case 'deadline': return TagVariant.ATTENTIVE;
 *       default: return TagVariant.SUBTLE;
 *     }
 *   };
 * 
 *   const getCategoryIcon = (category: string) => {
 *     const iconMap = {
 *       priority: AlertTriangle,
 *       team: Star,
 *       deadline: Calendar,
 *       status: CheckCircle,
 *       assignee: User
 *     };
 *     return iconMap[category] || MoreHorizontal;
 *   };
 * 
 *   const groupedTags = tags.reduce((acc, tag) => {
 *     if (!acc[tag.category]) acc[tag.category] = [];
 *     acc[tag.category].push(tag);
 *     return acc;
 *   }, {} as Record<string, typeof tags>);
 * 
 *   return (
 *     <div style={{ padding: '24px', backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
 *       <div style={{ marginBottom: '20px' }}>
 *         <h2 style={{ margin: '0 0 8px 0', fontSize: '20px', fontWeight: '700', color: '#1f2937' }}>
 *           Project: E-commerce Redesign
 *         </h2>
 *         <p style={{ margin: 0, color: '#6b7280', fontSize: '14px' }}>
 *           Manage project tags and metadata
 *         </p>
 *       </div>
 * 
 *       {Object.entries(groupedTags).map(([category, categoryTags]) => (
 *         <div key={category} style={{ marginBottom: '20px' }}>
 *           <div 
 *             style={{ 
 *               display: 'flex', 
 *               alignItems: 'center', 
 *               gap: '8px', 
 *               marginBottom: '12px',
 *               cursor: 'pointer'
 *             }}
 *             onClick={() => setExpandedCategory(expandedCategory === category ? null : category)}
 *           >
 *             {getCategoryIcon(category)({ size: 16, color: '#6b7280' })}
 *             <h4 style={{ 
 *               margin: 0, 
 *               fontSize: '14px', 
 *               fontWeight: '600', 
 *               color: '#374151',
 *               textTransform: 'capitalize'
 *             }}>
 *               {category} ({categoryTags.length})
 *             </h4>
 *           </div>
 * 
 *           <div style={{ 
 *             display: expandedCategory === category || expandedCategory === null ? 'flex' : 'none',
 *             gap: '8px', 
 *             flexWrap: 'wrap',
 *             paddingLeft: '24px'
 *           }}>
 *             {categoryTags.map(tag => (
 *               <div
 *                 key={tag.id}
 *                 onMouseEnter={() => setHoveredTag(tag.id)}
 *                 onMouseLeave={() => setHoveredTag(null)}
 *                 style={{ position: 'relative' }}
 *               >
 *                 <Tag
 *                   text={tag.text}
 *                   variant={getTagVariant(tag.category)}
 *                   color={tag.color}
 *                   size={TagSize.MD}
 *                   shape={TagShape.ROUNDED}
 *                   leftSlot={<tag.icon size={14} />}
 *                   rightSlot={
 *                     hoveredTag === tag.id ? (
 *                       <X 
 *                         size={14} 
 *                         style={{ cursor: 'pointer' }}
 *                         onClick={(e) => {
 *                           e.stopPropagation();
 *                           removeTag(tag.id);
 *                         }}
 *                       />
 *                     ) : null
 *                   }
 *                 />
 *               </div>
 *             ))}
 *           </div>
 *         </div>
 *       ))}
 * 
 *       <div style={{ 
 *         marginTop: '24px', 
 *         padding: '16px',
 *         backgroundColor: '#f9fafb',
 *         borderRadius: '8px',
 *         border: '1px dashed #d1d5db'
 *       }}>
 *         <p style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600', color: '#374151' }}>
 *           Tag Summary
 *         </p>
 *         <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: '#6b7280' }}>
 *           <span>Total: {tags.length} tags</span>
 *           <span>Categories: {Object.keys(groupedTags).length}</span>
 *           <span>High Priority: {tags.filter(t => t.color === TagColor.ERROR).length}</span>
 *         </div>
 *       </div>
 *     </div>
 *   );
 * }
 * ```
 */
const Tag = forwardRef<HTMLDivElement, TagProps>(
  (
    {
      text,
      variant = TagVariant.SUBTLE,
      color = TagColor.PRIMARY,
      size = TagSize.SM,
      shape = TagShape.SQUARICAL,
      leftSlot,
      rightSlot,
      onClick,
      splitTagPosition,
    },
    ref
  ) => {
    const tagTokens = useComponentToken("TAGS") as TagTokensType;

    const isSplitTag = splitTagPosition !== undefined;
    let borderRadius = tagTokens.borderRadius[shape][size];
    if (isSplitTag) {
      const radius = tagTokens.borderRadius[shape][size];
      borderRadius =
        splitTagPosition === "left"
          ? `${radius} 0 0 ${radius}`
          : `0 ${radius} ${radius} 0`;
    }

    return (
      <Block
        ref={ref}
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="fit-content"
        gap={tagTokens.gap[size]}
        height={tagTokens.height[size]}
        padding={tagTokens.padding[size]}
        backgroundColor={tagTokens.background[variant][color]}
        color={tagTokens.color[variant][color]}
        border={`${tagTokens.borderWidth[variant][color]}px solid ${tagTokens.borderColor[variant][color]}`}
        borderRadius={borderRadius}
        cursor={onClick ? "pointer" : "default"}
        onClick={onClick}
      >
        {leftSlot && <Block contentCentered>{leftSlot}</Block>}
        <Text
          fontSize={tagTokens.font[size].fontSize}
          fontWeight={tagTokens.font[size].fontWeight}
        >
          {text}
        </Text>
        {rightSlot && <Block contentCentered>{rightSlot}</Block>}
      </Block>
    );
  }
);

Tag.displayName = "Tag";

export default Tag;
