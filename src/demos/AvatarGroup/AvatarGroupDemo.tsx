import { useState } from 'react';
import { AvatarGroup } from '../../../lib/components/AvatarGroup';
import { AvatarSize, AvatarShape } from '../../../lib/components/Avatar/types';
import { Settings, User } from 'lucide-react';

// Sample avatar data
const sampleAvatars = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    alt: 'John Doe',
    fallback: 'JD',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    alt: 'Sarah Wilson',
    fallback: 'SW',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    alt: 'Robert Johnson',
    fallback: 'RJ',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    alt: 'Emily Davis',
    fallback: 'ED',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    alt: 'Michael Brown',
    fallback: 'MB',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    alt: 'Jessica Miller',
    fallback: 'JM',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    alt: 'David Wilson',
    fallback: 'DW',
  },
  {
    id: 8,
    alt: 'Alex Taylor',
    fallback: 'AT',
  }
];

// Create a larger set for the example with many avatars
const manyAvatars = [
  ...sampleAvatars,
  {
    id: 9,
    alt: 'Thomas Hill',
    fallback: 'TH',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    alt: 'Patricia Moore',
    fallback: 'PM',
  },
  {
    id: 11,
    fallback: <Settings size={18} />,
    alt: 'Settings account',
  },
  {
    id: 12,
    fallback: <User size={18} />,
    alt: 'Unknown user',
  }
];

const AvatarGroupDemo = () => {
  const [selectedAvatars, setSelectedAvatars] = useState<(string | number)[]>([1, 3]);
  
  const handleSelectionChange = (selectedIds: (string | number)[]) => {
    setSelectedAvatars(selectedIds);
    console.log('Selected avatar IDs:', selectedIds);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h1 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>AvatarGroup Component</h1>
        <p style={{ fontSize: '16px', color: '#717784', marginBottom: '24px' }}>
          AvatarGroup displays multiple avatars with configurable overflow handling and selection states.
        </p>
      </div>
      
      {/* Featured Demo */}
      <div style={{ padding: '24px', backgroundColor: '#F5F7FA', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#000000' }}>Featured: Selection with Overflow</h2>
        <p style={{ fontSize: '14px', color: '#717784', marginBottom: '24px' }}>
          AvatarGroup displays a configurable number of avatars, with an overflow counter for the rest. Users can select avatars by clicking, with selected state visually indicated.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <AvatarGroup 
            avatars={sampleAvatars} 
            maxCount={5} 
            size={AvatarSize.MD}
            selectedAvatarIds={selectedAvatars}
            onSelectionChange={handleSelectionChange}
          />
          
          <p style={{ fontSize: '14px', color: '#717784' }}>
            Currently selected avatar IDs: {selectedAvatars.join(', ') || 'None'}
          </p>
        </div>
      </div>
      
      {/* Different Sizes */}
      <div>
        <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>AvatarGroup Sizes</h2>
        <p style={{ fontSize: '14px', color: '#717784', marginBottom: '16px' }}>
          AvatarGroups can be rendered in different sizes to fit various UI needs.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '14px', color: '#717784' }}>Small (SM)</span>
            <AvatarGroup avatars={sampleAvatars} maxCount={5} size={AvatarSize.SM} />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '14px', color: '#717784' }}>Medium (MD)</span>
            <AvatarGroup avatars={sampleAvatars} maxCount={5} size={AvatarSize.MD} />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '14px', color: '#717784' }}>Large (LG)</span>
            <AvatarGroup avatars={sampleAvatars} maxCount={5} size={AvatarSize.LG} />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '14px', color: '#717784' }}>X-Large (XL)</span>
            <AvatarGroup avatars={sampleAvatars} maxCount={5} size={AvatarSize.XL} />
          </div>
        </div>
      </div>
      
      {/* Different Shapes */}
      <div>
        <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>AvatarGroup Shapes</h2>
        <p style={{ fontSize: '14px', color: '#717784', marginBottom: '16px' }}>
          AvatarGroups support different shapes matching the underlying Avatar components.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '14px', color: '#717784' }}>Circular (Default)</span>
            <AvatarGroup 
              avatars={sampleAvatars.slice(0, 6)} 
              maxCount={4} 
              size={AvatarSize.MD}
              shape={AvatarShape.CIRCULAR}
            />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '14px', color: '#717784' }}>Rounded</span>
            <AvatarGroup 
              avatars={sampleAvatars.slice(0, 6)} 
              maxCount={4}
              size={AvatarSize.MD} 
              shape={AvatarShape.ROUNDED}
            />
          </div>
        </div>
      </div>
      
      {/* Max Count Configuration */}
      <div>
        <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Max Visible Avatars</h2>
        <p style={{ fontSize: '14px', color: '#717784', marginBottom: '16px' }}>
          The maxCount prop controls how many avatars are visible before showing the overflow counter.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '14px', color: '#717784' }}>Max Count: 3</span>
            <AvatarGroup avatars={manyAvatars} maxCount={3} size={AvatarSize.MD} />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '14px', color: '#717784' }}>Max Count: 5</span>
            <AvatarGroup avatars={manyAvatars} maxCount={5} size={AvatarSize.MD} />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '14px', color: '#717784' }}>Max Count: 8</span>
            <AvatarGroup avatars={manyAvatars} maxCount={8} size={AvatarSize.MD} />
          </div>
        </div>
      </div>
      
      {/* Mixed Content Examples */}
      <div>
        <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Mixed Avatar Content</h2>
        <p style={{ fontSize: '14px', color: '#717784', marginBottom: '16px' }}>
          AvatarGroups can contain avatars with images, initials, or icon fallbacks.
        </p>
        <div>
          <AvatarGroup 
            avatars={[
              {
                id: 1,
                src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
                alt: 'User with image',
              },
              {
                id: 2,
                alt: 'User with initials',
                fallback: 'UI',
              },
              {
                id: 3,
                alt: 'Settings account',
                fallback: <Settings size={18} />,
              },
              {
                id: 4,
                src: 'https://invalid-image-url.jpg',
                alt: 'User with invalid image',
                fallback: 'II',
              },
              {
                id: 5,
                alt: 'Unknown user',
                fallback: <User size={18} />,
              }
            ]} 
            maxCount={4} 
            size={AvatarSize.MD}
          />
        </div>
      </div>
      
      {/* Plain Avatars Example */}
      <div>
        <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Plain Avatars (Initials Only)</h2>
        <p style={{ fontSize: '14px', color: '#717784', marginBottom: '16px' }}>
          AvatarGroups can be rendered with plain initials for abstract representations.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <AvatarGroup 
              avatars={[
                { id: 1, alt: 'Plain Heading', fallback: 'PH' },
                { id: 2, alt: 'Plain Heading', fallback: 'PH' },
                { id: 3, alt: 'Plain Heading', fallback: 'PH' },
                { id: 4, alt: 'Plain Heading', fallback: 'PH' }
              ]} 
              maxCount={4} 
              size={AvatarSize.LG}
              shape={AvatarShape.CIRCULAR}
            />
          </div>
          
          <div>
            <AvatarGroup 
              avatars={Array.from({ length: 24 }, (_, i) => ({ 
                id: i + 1, 
                alt: 'Plain Heading', 
                fallback: 'PH' 
              }))} 
              maxCount={3} 
              size={AvatarSize.LG}
              shape={AvatarShape.CIRCULAR}
            />
          </div>
        </div>
      </div>
      
      {/* Bottom Examples */}
      <div>
        <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Mixed Avatar Examples</h2>
        <p style={{ fontSize: '14px', color: '#717784', marginBottom: '16px' }}>
          Different configurations for various use cases.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <AvatarGroup 
              avatars={[
                {
                  id: 1,
                  src: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
                  alt: 'User 1',
                },
                {
                  id: 2,
                  src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
                  alt: 'User 2',
                },
                {
                  id: 3,
                  src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
                  alt: 'User 3',
                },
                {
                  id: 4,
                  src: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
                  alt: 'User 4',
                }
              ]} 
              maxCount={4} 
              size={AvatarSize.LG}
            />
          </div>
          
          <div>
            <AvatarGroup 
              avatars={[
                { id: 1, alt: 'User 1', fallback: 'PH' },
                { id: 2, alt: 'User 2', fallback: 'PH' },
                { id: 3, alt: 'User 3', fallback: 'PH' },
                { id: 4, alt: 'User 4', fallback: <Settings size={18} /> }
              ]} 
              maxCount={4} 
              size={AvatarSize.LG}
            />
          </div>
        </div>
      </div>
      
      {/* Interactive Selection Example */}
      <div>
        <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Interactive Selection</h2>
        <p style={{ fontSize: '14px', color: '#717784', marginBottom: '16px' }}>
          Click on avatars to select/deselect them. The selection state is visually indicated and tracked.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <AvatarGroupWithSelectionDemo />
        </div>
      </div>
    </div>
  );
};

// Interactive demo with state management
const AvatarGroupWithSelectionDemo = () => {
  const [selected, setSelected] = useState<(string | number)[]>([2, 4]);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <AvatarGroup 
        avatars={manyAvatars} 
        maxCount={6} 
        size={AvatarSize.LG}
        selectedAvatarIds={selected}
        onSelectionChange={setSelected}
      />
      
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
        <span style={{ fontSize: '14px', color: '#717784' }}>Selected:</span>
        {selected.length > 0 ? (
          selected.map(id => (
            <span key={id} style={{ 
              padding: '4px 8px', 
              backgroundColor: '#E2E8F0', 
              borderRadius: '4px',
              fontSize: '14px'
            }}>
              ID: {id}
            </span>
          ))
        ) : (
          <span style={{ fontSize: '14px', color: '#717784' }}>None selected</span>
        )}
      </div>
      
      <div style={{ marginTop: '8px' }}>
        <button 
          onClick={() => setSelected([])} 
          style={{ 
            padding: '8px 16px', 
            backgroundColor: '#4A5568', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Clear Selection
        </button>
      </div>
    </div>
  );
};

export default AvatarGroupDemo; 