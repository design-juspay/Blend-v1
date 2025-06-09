import Virtualizer from "./Virtualizer";

const SimpleExample = () => {
  const items = Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
    description: `This is item number ${i}`,
  }));

  return (
    <div
      style={{
        width: "400px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
      }}
    >
      <h2 style={{ color: "black" }}>Virtualizer Example</h2>
      <p style={{ color: "black" }}>
        Scroll to see virtualization in action (1000 items)
      </p>

      <div
        style={{
          marginTop: "20px",
          border: "1px solid #eee",
          borderRadius: "4px",
        }}
      >
        <Virtualizer
          items={items}
          itemHeight={80}
          maxHeight={400}
          renderItem={(item, index) => (
            <div
              key={item.id}
              style={{
                padding: "15px",
                borderBottom: "1px solid #eee",
                backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white",
              }}
            >
              <div style={{ fontWeight: "bold", color: "black" }}>
                {item.name}
              </div>
              <div style={{ fontSize: "14px", color: "#666" }}>
                {item.description}
              </div>
              <div
                style={{ fontSize: "12px", color: "#999", marginTop: "5px" }}
              >
                Item #{item.id}
              </div>
            </div>
          )}
        />
      </div>

      <div style={{ marginTop: "20px", fontSize: "14px", color: "#666" }}>
        <p>
          Only the visible items (plus a small buffer) are actually rendered in
          the DOM, making this approach very performant even with thousands of
          items.
        </p>
      </div>
    </div>
  );
};

export default SimpleExample;
