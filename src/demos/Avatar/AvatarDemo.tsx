import { Avatar } from '../../../lib/components/Avatar';
import { AvatarSize, AvatarShape } from '../../../lib/components/Avatar/types';
import { Settings } from 'lucide-react';

const AvatarDemo = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h1 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>Avatar Component</h1>
        <p style={{ fontSize: '16px', color: '#717784', marginBottom: '24px' }}>
          Avatars represent users or entities with images, initials, or fallback icons.
        </p>
      </div>
      
      {/* Online Status - Featured Demo */}
      <div style={{ padding: '24px', backgroundColor: '#F5F7FA', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#000000' }}>Featured: Online Status Indicator</h2>
        <p style={{ fontSize: '14px', color: '#717784', marginBottom: '16px' }}>
          The online indicator is positioned outside the avatar circle, providing a clear status without obscuring the avatar content.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <Avatar 
              size={AvatarSize.LG} 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80" 
              alt="John Doe" 
              fallback="JD"
              online 
            />
            <span style={{ fontSize: '14px', color: '#717784' }}>With Image</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <Avatar 
              size={AvatarSize.LG} 
              alt="Paul Harris" 
              fallback="PH"
              online 
            />
            <span style={{ fontSize: '14px', color: '#717784' }}>With Initials</span>
          </div>
        </div>
      </div>
      
      {/* Sizes */}
      <div>
        <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Avatar Sizes</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar size={AvatarSize.SM} alt="User" fallback="US" />
            <span style={{ fontSize: '14px', color: '#717784' }}>Small</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar size={AvatarSize.MD} alt="User" fallback="US" />
            <span style={{ fontSize: '14px', color: '#717784' }}>Medium</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar size={AvatarSize.LG} alt="User" fallback="US" />
            <span style={{ fontSize: '14px', color: '#717784' }}>Large</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar size={AvatarSize.XL} alt="User" fallback="US" />
            <span style={{ fontSize: '14px', color: '#717784' }}>X-Large</span>
          </div>
        </div>
      </div>
      
      {/* Shapes */}
      <div>
        <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Avatar Shapes</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar size={AvatarSize.LG} shape={AvatarShape.CIRCULAR} alt="John Doe" fallback="JD" />
            <span style={{ fontSize: '14px', color: '#717784' }}>Circular</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar size={AvatarSize.LG} shape={AvatarShape.ROUNDED} alt="John Doe" fallback="JD" />
            <span style={{ fontSize: '14px', color: '#717784' }}>Rounded</span>
          </div>
        </div>
      </div>
      
      {/* With Images */}
      <div>
        <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Avatars with Images</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Avatar 
            size={AvatarSize.MD} 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80" 
            alt="John Doe" 
            fallback="JD" 
          />
          
          <Avatar 
            size={AvatarSize.MD} 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80" 
            alt="Sarah Wilson" 
            fallback="SW" 
          />
          
          <Avatar 
            size={AvatarSize.MD} 
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80" 
            alt="Robert Johnson" 
            fallback="RJ" 
          />
        </div>
      </div>
      
      {/* Fallbacks */}
      <div>
        <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Avatars with Fallback</h2>
        <p style={{ fontSize: '14px', color: '#717784', marginBottom: '16px' }}>
          When images are not available or fail to load, fallbacks are displayed.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar size={AvatarSize.MD} alt="John Doe" fallback="JD" />
            <span style={{ fontSize: '14px', color: '#717784' }}>Initials</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar size={AvatarSize.MD} alt="User" fallback={<Settings size={16} />} />
            <span style={{ fontSize: '14px', color: '#717784' }}>Icon</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar 
              size={AvatarSize.MD} 
              alt="Invalid image" 
              src="https://invalid-url-that-will-fail.jpg"
              fallback="FI" 
            />
            <span style={{ fontSize: '14px', color: '#717784' }}>Failed Image</span>
          </div>
        </div>
      </div>
      
      {/* Online Status - All Sizes */}
      <div>
        <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Online Status Indicator Sizes</h2>
        <p style={{ fontSize: '14px', color: '#717784', marginBottom: '16px' }}>
          The online indicator scales appropriately with the avatar size.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar size={AvatarSize.SM} alt="User" fallback="US" online />
            <span style={{ fontSize: '14px', color: '#717784' }}>Small</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar size={AvatarSize.MD} alt="User" fallback="US" online />
            <span style={{ fontSize: '14px', color: '#717784' }}>Medium</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar size={AvatarSize.LG} alt="User" fallback="US" online />
            <span style={{ fontSize: '14px', color: '#717784' }}>Large</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar size={AvatarSize.XL} alt="User" fallback="US" online />
            <span style={{ fontSize: '14px', color: '#717784' }}>X-Large</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarDemo; 