import React, { useContext, useState } from 'react'
import { ExceptionDetailsContext } from '../../App';
import { addOne } from '../../axiosHelpers';
import { IUserGradeDTO } from '../../Types';

function UserGradeInsertSection() {
    const [value, setValue] = useState<IUserGradeDTO>({
        nazwa_Pracy:"",
        przedmiot_Oddzial_Id:-1,
        uczen_Id:-1
      });
      const { setMessage } = useContext(ExceptionDetailsContext);
    
      const handleClick = () => {
        if (setMessage) {
          addOne("Grade/usergrades", value, setMessage,false);
        }
      };
      return (
        <div className="insert-section">
          <div>
            <div className="insert-section-row">
              <label htmlFor="uczen_id">Id ucznia</label>
              <input
                type="text"
                value={value?.uczen_Id}
                onChange={(e) => {
                  setValue((prev: IUserGradeDTO | undefined) => {
                    return { ...prev!, uczen_Id: parseInt(e.target.value) };
                  });
                }}
                name="uczen_id"
                title="uczen_id"
              />
            </div>
            <div className="insert-section-row">
              <label htmlFor="przedmiot_oddzial">Id przedmiotu z oddzialu</label>
              <input
                type="number"
                value={value?.przedmiot_Oddzial_Id}
                onChange={(e) => {
                  setValue((prev: IUserGradeDTO | undefined) => {
                    return { ...prev!, przedmiot_Oddzial_Id: parseInt(e.target.value) };
                  });
                }}
                name="przedmiot_oddzial"
                title="przedmiot_oddzial"
              />
            </div>
            <div className="insert-section-row">
            <label htmlFor="nazwa_pracy">Nazwa pracy</label>
              <input
                type="text"
                value={value?.nazwa_Pracy}
                onChange={(e) => {
                  setValue((prev: IUserGradeDTO | undefined) => {
                    return { ...prev!, nazwa_Pracy: e.target.value };
                  });
                }}
                name="nazwa_pracy"
                title="nazwa_pracy"
              />
            </div>
          </div>
          <button onClick={handleClick}>Dodaj</button>
        </div>
      );
}

export default UserGradeInsertSection