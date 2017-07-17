import React from 'react';
import TreeView from 'react-treeview';
import './../../node_modules/react-treeview/react-treeview.css';

const CompanyPeople = ({dataSource}) => {
    return (
        <div className="Recipe">
        {dataSource.map((node, i) => {
            const type = node.type;
            const label = <span className="node">{type}</span>;
            return (
            <TreeView key={type + '|' + i} nodeLabel={label} defaultCollapsed={false}>
                {node.months.map(month => {
                const label2 = <span className="node">{month.name}</span>;
                return (
                    <TreeView nodeLabel={label2} key={month.name} defaultCollapsed={false}>
                        <div className="info">age: {month.age}</div>
                        <div className="info">sex: {month.sex}</div>
                        <div className="info">role: {month.role}</div>
                    </TreeView>
                );
                })}
            </TreeView>
            );
        })}
        </div>
    );
}

export default CompanyPeople;