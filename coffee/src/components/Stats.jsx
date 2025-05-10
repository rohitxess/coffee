//functional component only scoped in this component

import { calculateCurrentCaffeineLevel, coffeeConsumptionHistory, statusLevels } from "../utils";

function StatCard(props) {
    const { lg, title, children } = props;
    
    // children component is the content inside the statcard 
    return (
        <div className={"card stat-card " + (lg ? 'col-span-2' : '')}>
            <h4>{title}</h4>
            {children}
        </div>
    )
}

export default function Stats() {
   //creating an object 
    
   const stats = {
        daily_caffeine: 240, 
        daily_cost: 6.8,
        average_coffee: 2.3,
        total_cost: 220
    }

    const caffeineLevel = calculateCurrentCaffeineLevel(coffeeConsumptionHistory)

    return (
        <>
            <div className="section-header">
                <i className="fa-solid fa-chart-simple"></i>
                <h2>Stats</h2>
            </div>
            <div className="stats-grid">
                <StatCard lg title="Active caffeine level"> 
                    <div className="status">
                        <p><span className="stat-text">{caffeineLevel}</span> mg</p>
                        <h5 style={{color: statusLevels['low'].color , background:statusLevels['low'].background}}>Low</h5>
                    </div>
                    <p>{statusLevels['low'].description}</p>
                </StatCard>
                <StatCard title="Daily caffeine">
                    <p><span className="stat-text">{stats.daily_caffeine}</span> mg</p>
                    </StatCard> 
                <StatCard title="Avg # of coffees">
                    <p><span className="stat-text">{stats.average_coffee}</span> mg</p> </StatCard>
                <StatCard title="Daily cost ($)"> 
                    <p>$ <span className="stat-text">{stats.cost}</span> mg</p></StatCard>
                <StatCard title="Total cost ($)">  
                    <p>$ <span className="stat-text">{stats.total_cost}</span> mg</p></StatCard>
            </div>
        </>
    )
}