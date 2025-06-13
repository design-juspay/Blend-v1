import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../../lib/components/Tabs';
import { User, Settings, Lock, Home, Bell, Mail, CreditCard, ShieldCheck, Briefcase } from 'lucide-react'; // Added more icons
import { TabsVariant, TabsSize } from '../../../lib/components/Tabs/types';
import ThemeProvider from '../../../lib/context/ThemeProvider'; // Import ThemeProvider
import { HDFC_COMPONENT_TOKENS } from '../../themes/HDFC_COMPONENT_TOKENS'; // Import HDFC tokens
import { FOUNDATION_THEME } from '../../../lib/tokens'; // Import Foundation theme for HDFC wrapper

const TabsDemo = () => {
  const headerColor = FOUNDATION_THEME.colors.gray[900]; // Define a consistent dark color for headers
  const subHeaderColor = FOUNDATION_THEME.colors.gray[800];

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: headerColor }}>Tabs Component Demo</h1>
      
      {/* DEFAULT THEME EXAMPLES */}
      <section>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '8px', color: headerColor }}>Default Theme</h2>
        {/* UNDERLINE Variant (MD size) */}
        <div>
        <h2 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600, color: subHeaderColor }}>Underline Tabs (Medium)</h2>
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
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: FOUNDATION_THEME.colors.gray[800] }}>Account Settings</h3>
              <p style={{ color: '#717784', marginTop: '8px' }}>Manage your account preferences here.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="tab2">
            <div style={{ padding: '16px', borderRadius: '6px', border: '1px solid #E1E4EA', marginTop: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: FOUNDATION_THEME.colors.gray[800] }}>Password Settings</h3>
              <p style={{ color: '#717784', marginTop: '8px' }}>Change your password and security settings.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="tab3">
            <div style={{ padding: '16px', borderRadius: '6px', border: '1px solid #E1E4EA', marginTop: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: FOUNDATION_THEME.colors.gray[800] }}>General Settings</h3>
              <p style={{ color: '#717784', marginTop: '8px' }}>Configure your application preferences.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* BOXED Variant (MD size) */}
      <div>
        <h2 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600, color: subHeaderColor }}>Boxed Tabs (Medium)</h2>
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
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: FOUNDATION_THEME.colors.gray[800] }}>Dashboard</h3>
              <p style={{ color: '#717784', marginTop: '8px' }}>View your activity and stats.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="box2">
            <div style={{ padding: '16px', borderRadius: '6px', border: '1px solid #E1E4EA', marginTop: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: FOUNDATION_THEME.colors.gray[800] }}>Notifications</h3>
              <p style={{ color: '#717784', marginTop: '8px' }}>Manage your notification preferences.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="box3">
            <div style={{ padding: '16px', borderRadius: '6px', border: '1px solid #E1E4EA', marginTop: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: FOUNDATION_THEME.colors.gray[800] }}>Messages</h3>
              <p style={{ color: '#717784', marginTop: '8px' }}>View and manage your messages.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* FLOATING Variant (MD size) */}
      <div>
        <h2 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600, color: subHeaderColor }}>Floating Tabs (Medium)</h2>
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
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: FOUNDATION_THEME.colors.gray[800] }}>Personal Plan</h3>
              <p style={{ color: '#717784', marginTop: '8px' }}>Perfect for individual users.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="float2">
            <div style={{ padding: '16px', borderRadius: '6px', border: '1px solid #E1E4EA', marginTop: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: FOUNDATION_THEME.colors.gray[800] }}>Business Plan</h3>
              <p style={{ color: '#717784', marginTop: '8px' }}>Ideal for small teams and businesses.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="float3">
            <div style={{ padding: '16px', borderRadius: '6px', border: '1px solid #E1E4EA', marginTop: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: FOUNDATION_THEME.colors.gray[800] }}>Enterprise Plan</h3>
              <p style={{ color: '#717784', marginTop: '8px' }}>Custom solutions for large organizations.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Large Size Example (UNDERLINE) */}
      <div>
        <h2 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600, color: subHeaderColor }}>Underline Tabs (Large)</h2>
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
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: FOUNDATION_THEME.colors.gray[800] }}>User Profile</h3>
              <p style={{ color: '#717784', marginTop: '8px' }}>Update your personal information and preferences.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="lg2">
            <div style={{ padding: '16px', borderRadius: '6px', border: '1px solid #E1E4EA', marginTop: '16px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: FOUNDATION_THEME.colors.gray[800] }}>User Preferences</h3>
              <p style={{ color: '#717784', marginTop: '8px' }}>Customize your experience.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="lg3">
            <div style={{ padding: '16px', borderRadius: '6px', border: '1px solid #E1E4EA', marginTop: '16px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: FOUNDATION_THEME.colors.gray[800] }}>Security Settings</h3>
              <p style={{ color: '#717784', marginTop: '8px' }}>Manage security options and two-factor authentication.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* EXPANDED Examples */}
      <div>
        <h2 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600, color: subHeaderColor }}>Expanded Tabs (Full Width)</h2>
        
        {/* Expanded Underline */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 500, color: subHeaderColor }}>Expanded Underline</h3>
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
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: FOUNDATION_THEME.colors.gray[800] }}>Overview</h3>
                <p style={{ color: '#717784', marginTop: '8px' }}>Get a comprehensive view of your data.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="exp2">
              <div style={{ padding: '16px', borderRadius: '6px', border: '1px solid #E1E4EA', marginTop: '16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: FOUNDATION_THEME.colors.gray[800] }}>Analytics</h3>
                <p style={{ color: '#717784', marginTop: '8px' }}>Detailed analytics and insights.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Expanded Boxed */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 500, color: subHeaderColor }}>Expanded Boxed</h3>
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
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: FOUNDATION_THEME.colors.gray[800] }}>Home</h3>
                <p style={{ color: '#717784', marginTop: '8px' }}>Your main dashboard and overview.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="expbox2">
              <div style={{ padding: '16px', borderRadius: '6px', border: '1px solid #E1E4EA', marginTop: '16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: FOUNDATION_THEME.colors.gray[800] }}>Activity</h3>
                <p style={{ color: '#717784', marginTop: '8px' }}>Recent activity and updates.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Expanded Floating */}
        <div>
          <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 500, color: subHeaderColor }}>Expanded Floating</h3>
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
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: FOUNDATION_THEME.colors.gray[800] }}>Basic Plan</h3>
                <p style={{ color: '#717784', marginTop: '8px' }}>Essential features for getting started.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="expfloat2">
              <div style={{ padding: '16px', borderRadius: '6px', border: '1px solid #E1E4EA', marginTop: '16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: FOUNDATION_THEME.colors.gray[800] }}>Professional Plan</h3>
                <p style={{ color: '#717784', marginTop: '8px' }}>Advanced features for professionals.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div> {/* This is the closing div for "Expanded Floating" */}
        </div> {/* This is the closing div for "EXPANDED Examples" */}
      </section>

      {/* HDFC THEME EXAMPLES */}
      <section style={{ marginTop: '40px', paddingTop: '20px', borderTop: '2px solid #eee' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '8px', color: headerColor }}>HDFC Themed Tabs</h2>
        <ThemeProvider componentTokens={HDFC_COMPONENT_TOKENS} foundationTokens={FOUNDATION_THEME}>
          {/* HDFC Underline */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ marginBottom: '12px', fontSize: '18px', fontWeight: 500, color: subHeaderColor }}>HDFC Underline (Medium)</h3>
            <Tabs defaultValue="hdfcTab1" style={{ width: '500px' }}>
              <TabsList variant={TabsVariant.UNDERLINE} size={TabsSize.MD}>
                <TabsTrigger value="hdfcTab1" variant={TabsVariant.UNDERLINE} leftSlot={<CreditCard size={16} />}>Cards</TabsTrigger>
                <TabsTrigger value="hdfcTab2" variant={TabsVariant.UNDERLINE} leftSlot={<ShieldCheck size={16} />}>Security</TabsTrigger>
                <TabsTrigger value="hdfcTab3" variant={TabsVariant.UNDERLINE} leftSlot={<Briefcase size={16} />}>Offers</TabsTrigger>
              </TabsList>
              <TabsContent value="hdfcTab1"><div style={{ padding: '16px', marginTop: '10px', border: '1px solid #ddd', borderRadius: '4px', color: FOUNDATION_THEME.colors.gray[800] }}>HDFC Card Details Here.</div></TabsContent>
              <TabsContent value="hdfcTab2"><div style={{ padding: '16px', marginTop: '10px', border: '1px solid #ddd', borderRadius: '4px', color: FOUNDATION_THEME.colors.gray[800] }}>HDFC Security Information.</div></TabsContent>
              <TabsContent value="hdfcTab3"><div style={{ padding: '16px', marginTop: '10px', border: '1px solid #ddd', borderRadius: '4px', color: FOUNDATION_THEME.colors.gray[800] }}>Latest HDFC Offers.</div></TabsContent>
            </Tabs>
          </div>

          {/* HDFC Boxed */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ marginBottom: '12px', fontSize: '18px', fontWeight: 500, color: subHeaderColor }}>HDFC Boxed (Large, Expanded)</h3>
            <Tabs defaultValue="hdfcBox1" style={{ width: '600px' }}>
              <TabsList variant={TabsVariant.BOXED} size={TabsSize.LG} expanded={true}>
                <TabsTrigger value="hdfcBox1" variant={TabsVariant.BOXED} size={TabsSize.LG}>Loans</TabsTrigger>
                <TabsTrigger value="hdfcBox2" variant={TabsVariant.BOXED} size={TabsSize.LG}>Investments</TabsTrigger>
              </TabsList>
              <TabsContent value="hdfcBox1"><div style={{ padding: '16px', marginTop: '10px', border: '1px solid #ddd', borderRadius: '4px', color: FOUNDATION_THEME.colors.gray[800] }}>HDFC Loan Products.</div></TabsContent>
              <TabsContent value="hdfcBox2"><div style={{ padding: '16px', marginTop: '10px', border: '1px solid #ddd', borderRadius: '4px', color: FOUNDATION_THEME.colors.gray[800] }}>HDFC Investment Options.</div></TabsContent>
            </Tabs>
          </div>

           {/* HDFC Floating */}
           <div>
            <h3 style={{ marginBottom: '12px', fontSize: '18px', fontWeight: 500, color: subHeaderColor }}>HDFC Floating (Medium)</h3>
            <Tabs defaultValue="hdfcFloat1" style={{ width: '450px' }}>
              <TabsList variant={TabsVariant.FLOATING} size={TabsSize.MD}>
                <TabsTrigger value="hdfcFloat1" variant={TabsVariant.FLOATING}>Pay</TabsTrigger>
                <TabsTrigger value="hdfcFloat2" variant={TabsVariant.FLOATING}>Save</TabsTrigger>
                <TabsTrigger value="hdfcFloat3" variant={TabsVariant.FLOATING}>Borrow</TabsTrigger>
              </TabsList>
              <TabsContent value="hdfcFloat1"><div style={{ padding: '16px', marginTop: '10px', border: '1px solid #ddd', borderRadius: '4px', color: FOUNDATION_THEME.colors.gray[800] }}>HDFC Payment Services.</div></TabsContent>
            <TabsContent value="hdfcFloat2"><div style={{ padding: '16px', marginTop: '10px', border: '1px solid #ddd', borderRadius: '4px', color: FOUNDATION_THEME.colors.gray[800] }}>HDFC Savings Accounts.</div></TabsContent>
            <TabsContent value="hdfcFloat3"><div style={{ padding: '16px', marginTop: '10px', border: '1px solid #ddd', borderRadius: '4px', color: FOUNDATION_THEME.colors.gray[800] }}>HDFC Borrowing Options.</div></TabsContent>
            </Tabs>
          </div>
        </ThemeProvider>
      </section>
    </div>
  );
};

export default TabsDemo;
