import React from 'react'

export interface ViewListProps{
    title: string;
    setView : any;
    componentList: any
}
const ViewList: React.FC<ViewListProps> = ({title, setView , componentList}) => {
  return (
    <div className='flex gap-5'>
        {componentList.map((comp: any) => (
          <div key={comp.title}>
            <button onClick={() => setView(comp.title)}>{comp.title}</button>
          </div>
        ))}
    </div>
  )
}

export default ViewList