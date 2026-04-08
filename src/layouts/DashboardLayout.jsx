function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      
      <div style={{ width: "200px" }}>
        <h3>Sidebar</h3>
      </div>

      <div style={{ flex: 1 }}>
        {children}
      </div>

    </div>
  );
}

export default DashboardLayout;