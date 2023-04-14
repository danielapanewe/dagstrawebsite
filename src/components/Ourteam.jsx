import React from 'react';
import Thirdcard from './Thirdcard';
import { employee } from '../constants';

function Ourteam() {
  return (
    <section className="notreequipe mt-14 mb-12">
    <div className="containeur">
        <h2 className="title text-primarycolor text-center">
            NOTRE EQUIPE
        </h2>
        <div className="notreequipe__content mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {employee.map((carditem) => (
                <Thirdcard key={carditem.id} {...carditem} />
            ))}
        </div>
    </div>
</section>

  )
}

export default Ourteam