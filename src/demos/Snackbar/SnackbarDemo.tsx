import { useState } from "react";
import { Button, ButtonType, ButtonSize } from "../../../lib/components/Button";
import { CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react";
import Snackbar from "../../../lib/components/Snackbar/Snackbar";
import { SnackbarType, SnackbarPosition } from "../../../lib/components/Snackbar/types";

const SnackbarDemo = () => {
  const [activeSnackbars, setActiveSnackbars] = useState<Array<{
    id: string;
    type: SnackbarType;
    position: SnackbarPosition;
    heading?: string;
    message?: string;
    actionMessage?: string;
    showIcon?: boolean;
    autoClose?: boolean;
  }>>([]);

  const showSnackbar = (config: {
    type: SnackbarType;
    position: SnackbarPosition;
    heading?: string;
    message?: string;
    actionMessage?: string;
    showIcon?: boolean;
    autoClose?: boolean;
  }) => {
    const id = Date.now().toString();
    setActiveSnackbars(prev => [...prev, { ...config, id }]);
  };

  const hideSnackbar = (id: string) => {
    setActiveSnackbars(prev => prev.filter(snackbar => snackbar.id !== id));
  };

  const clearAllSnackbars = () => {
    setActiveSnackbars([]);
  };

  const getVariantIcon = (type: SnackbarType) => {
    switch (type) {
      case 'success':
        return <CheckCircle size={16} />;
      case 'error':
        return <AlertCircle size={16} />;
      case 'warning':
        return <AlertTriangle size={16} />;
      case 'info':
        return <Info size={16} />;
      default:
        return <Info size={16} />;
    }
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px', color: '#1F2937' }}>
          Snackbar Component
        </h1>
        <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: '1.5' }}>
          Snackbars provide brief messages about app processes. They appear temporarily and can include actions for users to take.
        </p>
      </div>

      {/* Quick Actions */}
      <div style={{ 
        marginBottom: '32px', 
        padding: '20px', 
        backgroundColor: '#F9FAFB', 
        borderRadius: '8px',
        border: '1px solid #E5E7EB'
      }}>
        <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#111827' }}>
          Quick Demo Actions
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
          <Button
            buttonType={ButtonType.SUCCESS}
            size={ButtonSize.SMALL}
            text="Success Message"
            onClick={() => showSnackbar({
              type: 'success',
              position: 'bottomRight',
              heading: 'Success!',
              message: "Your changes have been saved successfully!",
              autoClose: true
            })}
          />
          <Button
            buttonType={ButtonType.DANGER}
            size={ButtonSize.SMALL}
            text="Error Message"
            onClick={() => showSnackbar({
              type: 'error',
              position: 'bottomRight',
              heading: 'Error',
              message: "Failed to save changes. Please try again.",
              autoClose: false
            })}
          />
          <Button
            buttonType={ButtonType.DANGER}
            size={ButtonSize.SMALL}
            text="Warning Message"
            onClick={() => showSnackbar({
              type: 'warning',
              position: 'bottomRight',
              heading: 'Warning',
              message: "This action cannot be undone.",
              actionMessage: "Undo",
              autoClose: false
            })}
          />
          <Button
            buttonType={ButtonType.PRIMARY}
            size={ButtonSize.SMALL}
            text="With Action"
            onClick={() => showSnackbar({
              type: 'info',
              position: 'bottomRight',
              heading: 'Update Available',
              message: "New update available for download",
              actionMessage: "Update Now",
              autoClose: false
            })}
          />
        </div>
        <Button
          buttonType={ButtonType.SECONDARY}
          size={ButtonSize.SMALL}
          text="Clear All"
          onClick={clearAllSnackbars}
        />
      </div>

      {/* Variants Section */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#111827' }}>
          Snackbar Types
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          {(['info', 'success', 'warning', 'error'] as SnackbarType[]).map((type) => (
            <div key={type} style={{ 
              padding: '16px', 
              border: '1px solid #E5E7EB', 
              borderRadius: '6px',
              backgroundColor: '#FFFFFF'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                {getVariantIcon(type)}
                <h3 style={{ fontSize: '14px', fontWeight: 600, margin: 0, textTransform: 'capitalize' }}>
                  {type}
                </h3>
              </div>
              <Button
                buttonType={ButtonType.SECONDARY}
                size={ButtonSize.SMALL}
                text={`Show ${type}`}
                onClick={() => showSnackbar({
                  type,
                  position: 'bottomRight',
                  heading: `${type.charAt(0).toUpperCase() + type.slice(1)} Message`,
                  message: `This is a ${type} message with relevant information.`,
                  autoClose: true
                })}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Position Examples */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#111827' }}>
          Position Examples
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', maxWidth: '400px' }}>
          {(['topRight', 'topLeft', 'bottomRight', 'bottomLeft'] as SnackbarPosition[]).map((position) => (
            <Button
              key={position}
              buttonType={ButtonType.SECONDARY}
              size={ButtonSize.SMALL}
              text={position}
              onClick={() => showSnackbar({
                type: 'info',
                position,
                heading: 'Position Test',
                message: `Snackbar positioned at ${position}`,
                autoClose: true
              })}
            />
          ))}
        </div>
      </div>

      {/* Advanced Examples */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#111827' }}>
          Advanced Examples
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <Button
            buttonType={ButtonType.PRIMARY}
            text="Persistent (Manual Close)"
            onClick={() => showSnackbar({
              type: 'warning',
              position: 'topRight',
              heading: "Important Notice",
              message: "This message will stay until manually closed.",
              autoClose: false
            })}
          />
          <Button
            buttonType={ButtonType.SECONDARY}
            text="No Icon"
            onClick={() => showSnackbar({
              type: 'info',
              position: 'bottomLeft',
              heading: "No Icon Example",
              message: "This message appears without an icon.",
              showIcon: false,
              autoClose: true
            })}
          />
          <Button
            buttonType={ButtonType.SUCCESS}
            text="With Action Button"
            onClick={() => showSnackbar({
              type: 'success',
              position: 'topLeft',
              heading: "Upload Complete",
              message: "Your file has been uploaded successfully.",
              actionMessage: "View File",
              autoClose: false
            })}
          />
        </div>
      </div>

      {/* Active Snackbars Display */}
      {activeSnackbars.length > 0 && (
        <div style={{ 
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          padding: '12px',
          backgroundColor: '#374151',
          color: 'white',
          borderRadius: '6px',
          fontSize: '12px',
          zIndex: 9999
        }}>
          Active snackbars: {activeSnackbars.length}
        </div>
      )}

      {/* Render Active Snackbars */}
      {activeSnackbars.map((snackbar) => (
        <Snackbar
          key={snackbar.id}
          type={snackbar.type}
          position={snackbar.position}
          heading={snackbar.heading}
          message={snackbar.message}
          actionMessage={snackbar.actionMessage}
          showIcon={snackbar.showIcon}
          autoClose={snackbar.autoClose}
          onClose={() => hideSnackbar(snackbar.id)}
          onActionClick={() => console.log(`Action clicked for ${snackbar.id}`)}
        />
      ))}
    </div>
  );
};

export default SnackbarDemo; 