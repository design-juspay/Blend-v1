import { Button, ButtonType, ButtonSize, ButtonSubType } from '../../../lib/components/Button';
import { ButtonGroup } from '../../../lib/components/ButtonGroup';
import { ButtonGroupMode } from '../../../lib/components/ButtonGroup/types';
import { ArrowRight, ArrowLeft, Copy, Trash, Download, Edit, Save, Filter, Plus, User, Settings } from 'lucide-react';

const ButtonGroupDemo = () => {
  return (
    <div className="component-demo">
      <h1 className="heading-1">Button Group</h1>
      <p className="description">
        Button groups allow you to combine multiple related buttons together
        with consistent spacing and visual appearance.
      </p>

      <section className="demo-section">
        <h2 className="heading-2">Stacked Button Groups</h2>
        <p>Buttons are connected without spacing between them.</p>

        <div className="demo-row">
          <div className="demo-item">
            <h3 className="heading-3">Default (Single Primary)</h3>
            <ButtonGroup>
              <Button buttonType={ButtonType.PRIMARY} text="Save" />
              <Button text="Cancel" />
            </ButtonGroup>
          </div>

          <div className="demo-item">
            <h3 className="heading-3">With Icons</h3>
            <ButtonGroup>
              <Button
                buttonType={ButtonType.PRIMARY}
                text="Next"
                trailingIcon={ArrowRight}
              />
              <Button text="Back" leadingIcon={ArrowLeft} />
            </ButtonGroup>
          </div>

          <div className="demo-item">
            <h3 className="heading-3">All Secondary</h3>
            <ButtonGroup mode={ButtonGroupMode.ALL_SECONDARY}>
              <Button
                buttonType={ButtonType.PRIMARY}
                text="Copy"
                leadingIcon={Copy}
              />
              <Button
                buttonType={ButtonType.DANGER}
                text="Delete"
                leadingIcon={Trash}
              />
              <Button text="Download" leadingIcon={Download} />
            </ButtonGroup>
          </div>
        </div>

        <div className="demo-row">
          <div className="demo-item">
            <h3 className="heading-3">Icon Only Buttons</h3>
            <ButtonGroup>
              <Button
                buttonType={ButtonType.PRIMARY}
                subType={ButtonSubType.ICON_ONLY}
                text="Edit"
                leadingIcon={Edit}
                ariaLabel="Edit"
              />
              <Button
                subType={ButtonSubType.ICON_ONLY}
                text="Copy"
                leadingIcon={Copy}
                ariaLabel="Copy"
              />
              <Button
                subType={ButtonSubType.ICON_ONLY}
                text="Delete"
                leadingIcon={Trash}
                ariaLabel="Delete"
              />
            </ButtonGroup>
          </div>
        </div>
      </section>

      <section className="demo-section">
        <h2 className="heading-2">Button Group Sizes</h2>
        <p>
          Button groups are available in three sizes: small, medium, and large.
        </p>

        <div className="demo-row">
          <div className="demo-item">
            <h3 className="heading-3">Small Size</h3>
            <ButtonGroup size={ButtonSize.SMALL}>
              <Button buttonType={ButtonType.PRIMARY} text="Save" />
              <Button text="Cancel" />
              <Button buttonType={ButtonType.DANGER} text="Delete" />
            </ButtonGroup>
            <div style={{ marginTop: "1rem" }}>
              <ButtonGroup size={ButtonSize.SMALL} isStacked={false}>
                <Button buttonType={ButtonType.PRIMARY} text="Save" />
                <Button text="Cancel" />
                <Button buttonType={ButtonType.DANGER} text="Delete" />
              </ButtonGroup>
            </div>
          </div>

          <div className="demo-item">
            <h3 className="heading-3">Medium Size (Default)</h3>
            <ButtonGroup size={ButtonSize.MEDIUM}>
              <Button buttonType={ButtonType.PRIMARY} text="Save" />
              <Button text="Cancel" />
              <Button buttonType={ButtonType.DANGER} text="Delete" />
            </ButtonGroup>
            <div style={{ marginTop: "1rem" }}>
              <ButtonGroup size={ButtonSize.MEDIUM} isStacked={false}>
                <Button buttonType={ButtonType.PRIMARY} text="Save" />
                <Button text="Cancel" />
                <Button buttonType={ButtonType.DANGER} text="Delete" />
              </ButtonGroup>
            </div>
          </div>

          <div className="demo-item">
            <h3 className="heading-3">Large Size</h3>
            <ButtonGroup size={ButtonSize.LARGE}>
              <Button buttonType={ButtonType.PRIMARY} text="Save" />
              <Button text="Cancel" />
              <Button buttonType={ButtonType.DANGER} text="Delete" />
            </ButtonGroup>
            <div style={{ marginTop: "1rem" }}>
              <ButtonGroup size={ButtonSize.LARGE} isStacked={false}>
                <Button buttonType={ButtonType.PRIMARY} text="Save" />
                <Button text="Cancel" />
                <Button buttonType={ButtonType.DANGER} text="Delete" />
              </ButtonGroup>
            </div>
          </div>
        </div>

        <div className="demo-row" style={{ marginTop: "2rem" }}>
          <div className="demo-item">
            <h3 className="heading-3">Small Icon-Only Buttons</h3>
            <ButtonGroup size={ButtonSize.SMALL}>
              <Button
                buttonType={ButtonType.PRIMARY}
                subType={ButtonSubType.ICON_ONLY}
                text="Add"
                leadingIcon={Plus}
                ariaLabel="Add"
              />
              <Button
                subType={ButtonSubType.ICON_ONLY}
                text="Filter"
                leadingIcon={Filter}
                ariaLabel="Filter"
              />
            </ButtonGroup>
          </div>

          <div className="demo-item">
            <h3 className="heading-3">Medium Icon-Only Buttons</h3>
            <ButtonGroup size={ButtonSize.MEDIUM}>
              <Button
                buttonType={ButtonType.PRIMARY}
                subType={ButtonSubType.ICON_ONLY}
                text="User"
                leadingIcon={User}
                ariaLabel="User"
              />
              <Button
                subType={ButtonSubType.ICON_ONLY}
                text="Settings"
                leadingIcon={Settings}
                ariaLabel="Settings"
              />
            </ButtonGroup>
          </div>

          <div className="demo-item">
            <h3 className="heading-3">Large Icon-Only Buttons</h3>
            <ButtonGroup size={ButtonSize.LARGE}>
              <Button
                buttonType={ButtonType.PRIMARY}
                subType={ButtonSubType.ICON_ONLY}
                text="Edit"
                leadingIcon={Edit}
                ariaLabel="Edit"
              />
              <Button
                subType={ButtonSubType.ICON_ONLY}
                text="Delete"
                leadingIcon={Trash}
                ariaLabel="Delete"
              />
            </ButtonGroup>
          </div>
        </div>
      </section>

      <section className="demo-section">
        <h2 className="heading-2">Non-Stacked Button Groups</h2>
        <p>Buttons have spacing between them but maintain consistent sizing.</p>

        <div className="demo-row">
          <div className="demo-item">
            <h3 className="heading-3">Default Spacing</h3>
            <ButtonGroup isStacked={false}>
              <Button
                buttonType={ButtonType.PRIMARY}
                text="Save"
                leadingIcon={Save}
              />
              <Button text="Cancel" />
              <Button
                buttonType={ButtonType.DANGER}
                text="Delete"
                leadingIcon={Trash}
              />
            </ButtonGroup>
          </div>

          <div className="demo-item">
            <h3 className="heading-3">All Secondary Mode</h3>
            <ButtonGroup isStacked={false} mode={ButtonGroupMode.ALL_SECONDARY}>
              <Button buttonType={ButtonType.PRIMARY} text="Option 1" />
              <Button buttonType={ButtonType.PRIMARY} text="Option 2" />
              <Button buttonType={ButtonType.PRIMARY} text="Option 3" />
            </ButtonGroup>
          </div>
        </div>
      </section>

      <section className="demo-section">
        <h2 className="heading-2">Button Group Modes</h2>
        <p>
          Different modes control how button types are handled within the group.
        </p>

        <div className="demo-row">
          <div className="demo-item">
            <h3 className="heading-3">Single Primary (Default)</h3>
            <p>Only one button can be primary/success/danger.</p>
            <ButtonGroup mode={ButtonGroupMode.SINGLE_PRIMARY}>
              <Button buttonType={ButtonType.PRIMARY} text="Primary" />
              <Button buttonType={ButtonType.SUCCESS} text="Success" />
              <Button buttonType={ButtonType.DANGER} text="Danger" />
            </ButtonGroup>
          </div>

          <div className="demo-item">
            <h3 className="heading-3">All Secondary</h3>
            <p>All buttons are forced to secondary type.</p>
            <ButtonGroup mode={ButtonGroupMode.ALL_SECONDARY}>
              <Button buttonType={ButtonType.PRIMARY} text="Primary" />
              <Button buttonType={ButtonType.SUCCESS} text="Success" />
              <Button buttonType={ButtonType.DANGER} text="Danger" />
            </ButtonGroup>
          </div>

          <div className="demo-item">
            <h3 className="heading-3">No Transform</h3>
            <p>Button types are preserved as specified.</p>
            <ButtonGroup mode={ButtonGroupMode.NO_TRANSFORM}>
              <Button buttonType={ButtonType.PRIMARY} text="Primary" />
              <Button buttonType={ButtonType.SUCCESS} text="Success" />
              <Button buttonType={ButtonType.DANGER} text="Danger" />
            </ButtonGroup>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ButtonGroupDemo; 