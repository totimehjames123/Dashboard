import "../css/TopNavBar.css"

const TopNavBar = () => {
    return (
        <div className="TopNavBar" style={{background: 'orange', width: '100%', height: '70px'}}>
            <div style={{float: 'left', width: '50%'}}>
                <input style={{background: 'whitesmoke', fontSize: 'large', border: 'none', color: 'black', padding: '10px', margin: '8px', borderRadius: '5px', width: '100%'}} type="text" placeholder="Search anything here..."/>
            </div>
            <div style={{float: 'right', width: ''}}>
                <button style={{background: 'black', border: 'none', color: 'white', padding: '10px', margin: '12px', borderRadius: '5px'}}>Logout</button>
            </div>
        </div>
    )
}

export default TopNavBar