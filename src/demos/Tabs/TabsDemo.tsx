import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../../lib/components/Tabs';
import { User, Settings, Lock, Home, Bell, Mail } from 'lucide-react';
import { TabsVariant, TabsSize } from '../../../lib/components/Tabs/types';

const TabsDemo = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      {/* UNDERLINE Variant (MD size) */}
      <div>
        <h2 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>Underline Tabs (Medium)</h2>
        <Tabs defaultValue="tab1" style={{ width: '400px' }}>
          <TabsList variant={TabsVariant.UNDERLINE} size={TabsSize.MD}>
            <TabsTrigger 
              value="tab1" 
              variant={TabsVariant.UNDERLINE}
              leftSlot={<User size={16} />}
            >
              Account
            </TabsTrigger>
            <TabsTrigger 
              value="tab2" 
              variant={TabsVariant.UNDERLINE}
              leftSlot={<Lock size={16} />}
            >
              Password
            </TabsTrigger>
            <TabsTrigger 
              value="tab3" 
              variant={TabsVariant.UNDERLINE}
              leftSlot={<Settings size={16} />}
            >
              Settings
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="tab1">
            <div style={{ padding: '16px', borderRadius: '6px', border: '1px solid #E1E4EA', marginTop: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600 }}>Account Settings</h3>
              <p style={{ color: '#717784', marginTop: '8px' }}>Manage your account preferences here.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="tab2">
            <div style={{ padding: '16px', borderRadius: '6px', border: '1px solid #E1E4EA', marginTop: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600 }}>Password Settings</h3>
              <p style={{ color: '#717784', marginTop: '8px' }}>Change your password and security settings.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="tab3">
            <div style={{ padding: '16px', borderRadius: '6px', border: '1px solid #E1E4EA', marginTop: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600 }}>General Settings</h3>
              <p style={{ color: '#717784', marginTop: '8px' }}>Configure your application preferences.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* BOXED Variant (MD size) */}
      <div>
        <h2 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>Boxed Tabs (Medium)</h2>
        <Tabs defaultValue="box1" style={{ width: '400px' }}>
          <TabsList variant={TabsVariant.BOXED} size={TabsSize.LG}>
            <TabsTrigger 
              value="box1" 
              variant={TabsVariant.BOXED}
              leftSlot={<Home size={16} />}
            >
              Dashboard
            </TabsTrigger>
            <TabsTrigger 
              value="box2" 
              variant={TabsVariant.BOXED}
              leftSlot={<Bell size={16} />}
            >
              Notifications
            </TabsTrigger>
            <TabsTrigger 
              value="box3" 
              variant={TabsVariant.BOXED}
              leftSlot={<Mail size={16} />}
            >
              Messages
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="box1">
            <div style={{ padding: '16px', borderRadius: '6px', border: '1px solid #E1E4EA', marginTop: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600 }}>Dashboard</h3>
              <p style={{ color: '#717784', marginTop: '8px' }}>View your activity and stats.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="box2">
            <div style={{ padding: '16px', borderRadius: '6px', border: '1px solid #E1E4EA', marginTop: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600 }}>Notifications</h3>
              <p style={{ color: '#717784', marginTop: '8px' }}>Manage your notification preferences.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="box3">
            <div style={{ padding: '16px', borderRadius: '6px', border: '1px solid #E1E4EA', marginTop: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600 }}>Messages</h3>
              <p style={{ color: '#717784', marginTop: '8px' }}>View and manage your messages.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* FLOATING Variant (MD size) */}
      <div>
        <h2 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>Floating Tabs (Medium)</h2>
        <Tabs defaultValue="float1" style={{ width: '400px' }}>
          <TabsList variant={TabsVariant.FLOATING} size={TabsSize.MD}>
            <TabsTrigger 
              value="float1" 
              variant={TabsVariant.FLOATING}
            >
              Personal
            </TabsTrigger>
            <TabsTrigger 
              value="float2" 
              variant={TabsVariant.FLOATING}
            >
              Business
            </TabsTrigger>
            <TabsTrigger 
              value="float3" 
              variant={TabsVariant.FLOATING}
            >
              Enterprise
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="float1">
            <div style={{ padding: '16px', borderRadius: '6px', border: '1px solid #E1E4EA', marginTop: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600 }}>Personal Plan</h3>
              <p style={{ color: '#717784', marginTop: '8px' }}>Perfect for individual users.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="float2">
            <div style={{ padding: '16px', borderRadius: '6px', border: '1px solid #E1E4EA', marginTop: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600 }}>Business Plan</h3>
              <p style={{ color: '#717784', marginTop: '8px' }}>Ideal for small teams and businesses.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="float3">
            <div style={{ padding: '16px', borderRadius: '6px', border: '1px solid #E1E4EA', marginTop: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600 }}>Enterprise Plan</h3>
              <p style={{ color: '#717784', marginTop: '8px' }}>Custom solutions for large organizations.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Large Size Example (UNDERLINE) */}
      <div>
        <h2 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>Underline Tabs (Large)</h2>
        <Tabs defaultValue="lg1" style={{ width: '500px' }}>
          <TabsList variant={TabsVariant.UNDERLINE} size={TabsSize.LG}>
            <TabsTrigger 
              value="lg1" 
              variant={TabsVariant.UNDERLINE}
              size={TabsSize.LG}
              leftSlot={<User size={18} />}
            >
              Profile
            </TabsTrigger>
            <TabsTrigger 
              value="lg2" 
              variant={TabsVariant.UNDERLINE}
              size={TabsSize.LG}
              leftSlot={<Settings size={18} />}
            >
              Preferences
            </TabsTrigger>
            <TabsTrigger 
              value="lg3" 
              variant={TabsVariant.UNDERLINE}
              size={TabsSize.LG}
              rightSlot={<Lock size={18} />}
            >
              Security
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="lg1">
            <div style={{ padding: '16px', borderRadius: '6px', border: '1px solid #E1E4EA', marginTop: '16px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 600 }}>User Profile</h3>
              <p style={{ color: '#717784', marginTop: '8px' }}>Update your personal information and preferences.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="lg2">
            <div style={{ padding: '16px', borderRadius: '6px', border: '1px solid #E1E4EA', marginTop: '16px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 600 }}>User Preferences</h3>
              <p style={{ color: '#717784', marginTop: '8px' }}>Customize your experience.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="lg3">
            <div style={{ padding: '16px', borderRadius: '6px', border: '1px solid #E1E4EA', marginTop: '16px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 600 }}>Security Settings</h3>
              <p style={{ color: '#717784', marginTop: '8px' }}>Manage security options and two-factor authentication.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* EXPANDED Examples */}
      <div>
        <h2 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>Expanded Tabs (Full Width)</h2>
        
        {/* Expanded Underline */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 500 }}>Expanded Underline</h3>
          <Tabs defaultValue="exp1" style={{ width: '600px' }}>
            <TabsList variant={TabsVariant.UNDERLINE} size={TabsSize.MD} expanded={true}>
              <TabsTrigger 
                value="exp1" 
                variant={TabsVariant.UNDERLINE}
                leftSlot={<User size={16} />}
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="exp2" 
                variant={TabsVariant.UNDERLINE}
                leftSlot={<Settings size={16} />}
              >
                Analytics
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="exp1">
              <div style={{ padding: '16px', borderRadius: '6px', border: '1px solid #E1E4EA', marginTop: '16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600 }}>Overview</h3>
                <p style={{ color: '#717784', marginTop: '8px' }}>Get a comprehensive view of your data.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="exp2">
              <div style={{ padding: '16px', borderRadius: '6px', border: '1px solid #E1E4EA', marginTop: '16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600 }}>Analytics</h3>
                <p style={{ color: '#717784', marginTop: '8px' }}>Detailed analytics and insights.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Expanded Boxed */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 500 }}>Expanded Boxed</h3>
          <Tabs defaultValue="expbox1" style={{ width: '600px' }}>
            <TabsList variant={TabsVariant.BOXED} size={TabsSize.MD} expanded={true}>
              <TabsTrigger 
                value="expbox1" 
                variant={TabsVariant.BOXED}
                leftSlot={<Home size={16} />}
              >
                Home
              </TabsTrigger>
              <TabsTrigger 
                value="expbox2" 
                variant={TabsVariant.BOXED}
                leftSlot={<Bell size={16} />}
              >
                Activity
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="expbox1">
              <div style={{ padding: '16px', borderRadius: '6px', border: '1px solid #E1E4EA', marginTop: '16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600 }}>Home</h3>
                <p style={{ color: '#717784', marginTop: '8px' }}>Your main dashboard and overview.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="expbox2">
              <div style={{ padding: '16px', borderRadius: '6px', border: '1px solid #E1E4EA', marginTop: '16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600 }}>Activity</h3>
                <p style={{ color: '#717784', marginTop: '8px' }}>Recent activity and updates.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Expanded Floating */}
        <div>
          <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 500 }}>Expanded Floating</h3>
          <Tabs defaultValue="expfloat1" style={{ width: '600px' }}>
            <TabsList variant={TabsVariant.FLOATING} size={TabsSize.MD} expanded={true}>
              <TabsTrigger 
                value="expfloat1" 
                variant={TabsVariant.FLOATING}
              >
                Basic
              </TabsTrigger>
              <TabsTrigger 
                value="expfloat2" 
                variant={TabsVariant.FLOATING}
              >
                Professional
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="expfloat1">
              <div style={{ padding: '16px', borderRadius: '6px', border: '1px solid #E1E4EA', marginTop: '16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600 }}>Basic Plan</h3>
                <p style={{ color: '#717784', marginTop: '8px' }}>Essential features for getting started.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="expfloat2">
              <div style={{ padding: '16px', borderRadius: '6px', border: '1px solid #E1E4EA', marginTop: '16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600 }}>Professional Plan</h3>
                <p style={{ color: '#717784', marginTop: '8px' }}>Advanced features for professionals.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TabsDemo; 