//functional component only scoped in this component
import { auth } from "../../firebase";
import { useAuth } from "../context/AuthContext";
import { calculateCoffeeStats, calculateCurrentCaffeineLevel, coffeeConsumptionHistory, getTopThreeCoffees, statusLevels } from "../utils";

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
    const  { globalData } = useAuth();
   //invoke the function calculate coffee stats from utils 

   const stats = calculateCoffeeStats(globalData);

    const caffeineLevel = calculateCurrentCaffeineLevel(globalData);
    const warningLevel = caffeineLevel < statusLevels['low'].maxLevel ? 
        'low' : 
        caffeineLevel <statusLevels['high'].maxLevel ? 
            'moderate' :
            'high'

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
                        <h5 style={{color: statusLevels[warningLevel].color , background:statusLevels[warningLevel].background}}>{warningLevel}</h5>
                    </div>
                    <p>{statusLevels[warningLevel].description}</p>
                </StatCard>
                <StatCard title="Daily caffeine">
                    <p><span className="stat-text">{stats.daily_caffeine}</span> mg</p>
                    </StatCard> 
                <StatCard title="Avg # of coffees">
                    <p><span className="stat-text">{stats.average_coffees}</span></p> </StatCard>
                <StatCard title="Daily cost ($)"> 
                    <p>$ <span className="stat-text">{stats.daily_cost}</span> mg</p></StatCard>
                <StatCard title="Total cost ($)">  
                    <p>$ <span className="stat-text">{stats.total_cost}</span> mg</p></StatCard>
                <table className="stat-table">
                    <thead>
                        <tr>
                            <th>Coffee Name</th>
                            <th>Number of Purchases</th>
                            <th>Percentage of Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getTopThreeCoffees(globalData).map((coffee, coffeeIndex) => {
                            return (
                                <tr key={coffeeIndex}>
                                    <td>{coffee.coffeeName}</td>
                                    <td>{coffee.count}</td>
                                    <td>{coffee.percentage}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )       
}