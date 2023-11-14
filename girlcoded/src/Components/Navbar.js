import React from 'react';
//import './Navbar.css'; // Specific CSS for the Navbar

const Navbar = () => {
  return (
    <nav>
      {<div style={{width: '100%', height: '100%', paddingLeft: 120, paddingRight: 120, paddingTop: 22, paddingBottom: 22, background: 'white', boxShadow: '0px -1px 1px rgba(0, 0, 0, 0.10) inset', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
    <div style={{width: 1112, height: 31, justifyContent: 'flex-start', alignItems: 'center', gap: 150, display: 'flex'}}>
        <div style={{width: 58, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div style={{width: 60.15, color: '#3563E9', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', letterSpacing: 0.20, wordWrap: 'break-word'}}>Home</div>
        </div>
        <div style={{justifyContent: 'flex-end', alignItems: 'center', display: 'flex'}}>
            <div style={{color: '#424242', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', letterSpacing: 0.20, wordWrap: 'break-word'}}>Projects</div>
        </div>
        <div style={{justifyContent: 'flex-end', alignItems: 'center', display: 'flex'}}>
            <div style={{color: '#424242', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', letterSpacing: 0.20, wordWrap: 'break-word'}}>Sirena</div>
        </div>
        <div style={{width: 58, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div style={{width: 60.15, color: '#424242', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', letterSpacing: 0.20, wordWrap: 'break-word'}}>Diego</div>
        </div>
        <div style={{justifyContent: 'flex-end', alignItems: 'center', display: 'flex'}}>
            <div style={{color: '#424242', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', letterSpacing: 0.20, wordWrap: 'break-word'}}>Fatima</div>
        </div>
    </div>
    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'flex'}}>
        <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex'}}>
            <div style={{paddingLeft: 22, paddingRight: 22, paddingTop: 8, paddingBottom: 8, background: '#3563E9', borderRadius: 5, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
                <div style={{textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', letterSpacing: 0.46, wordWrap: 'break-word'}}>Login</div>
            </div>
        </div>
        <div style={{
              textAlign: 'center', 
              color: 'white', 
              fontSize: 16, 
              fontFamily: 'Inter', 
              fontWeight: '500', 
              letterSpacing: 0.46, 
              wordWrap: 'break-word'
            }}>Login</div>
    </div>
</div>
}
    </nav>
  );
};

export default Navbar;
