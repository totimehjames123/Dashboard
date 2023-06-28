const Dashboard = () => {
    const updates = [{
        title: "Total Books",
        number: "23",
        time: "yesterday"
    },
    {
        title: "Total Books",
        number: "23",
        time: "yesterday"
    },
    {
        title: "Total Books",
        number: "23",
        time: "yesterday"
    },
    {
        title: "Total Books",
        number: "23",
        time: "yesterday"
    },
    {
        title: "Total Books",
        number: "23",
        time: "yesterday"
    },{
        title: "Total Books",
        number: "23",
        time: "yesterday"
    },
    {
        title: "Total Books",
        number: "23",
        time: "yesterday"
    },{
        title: "Total Books",
        number: "23",
        time: "yesterday"
    },
    {
        title: "Total Books",
        number: "23",
        time: "yesterday"
    },{
        title: "Total Books",
        number: "23",
        time: "yesterday"
    },
    {
        title: "Total Books",
        number: "23",
        time: "yesterday"
    },{
        title: "Total Books",
        number: "23",
        time: "yesterday"
    },
    {
        title: "Total Books",
        number: "23",
        time: "yesterday"
    },{
        title: "Total Books",
        number: "23",
        time: "yesterday"
    },
    {
        title: "Total Books",
        number: "23",
        time: "yesterday"
    }
]
    return (
        <div className="DashBoard">
            {updates.map((item, id) => (<div style={{float: 'left', width: '25%', margin: '10px', background: 'lightgray', fontWeight: 'bold'}} key={id}>
                {<p>{item.title}</p>}
                {<p>{item.number}</p>}
                {<p>{item.time}</p>}
            </div>))}
        </div>
    )
}
export default Dashboard;