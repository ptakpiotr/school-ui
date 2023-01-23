import React, { useContext, useState } from 'react'
import { ExceptionDetailsContext } from '../../App';
import { addOne } from '../../axiosHelpers';
import { ISubjectClassDTO } from '../../Types';

/**
 * Komponent odpowiedzialny za wprowadzanie informacji związanych z przedmiotami w oddzialach
 * @returns JSX.Element
 */
function SubjectClassesInsertSection() {
    const [value, setValue] = useState<ISubjectClassDTO>({
        klasa_id:-1,
        nauczyciel_id:-1,
        przedmiot_id:-1
      });
    
      const { setMessage } = useContext(ExceptionDetailsContext);
    
      const handleClick = () => {
        if(setMessage){
          addOne("Subject/subjectClasses", value,setMessage);
        }
      };
      return (
        <div className="insert-section">
          <div>
            <div className="insert-section-row">
              <label htmlFor="klasa_id">Id klasy</label>
              <input
                type="number"
                value={value?.klasa_id}
                onChange={(e) => {
                  setValue((prev: ISubjectClassDTO | undefined) => {
                    return { ...prev!, klasa_id: parseInt(e.target.value) };
                  });
                }}
                name="klasa_id"
                title="klasa_id"
              />
            </div>
            <div className="insert-section-row">
              <label htmlFor="nauczyciel_id">Id nauczyciela</label>
              <input
                type="number"
                value={value?.nauczyciel_id}
                onChange={(e) => {
                  setValue((prev: ISubjectClassDTO | undefined) => {
                    return { ...prev!, nauczyciel_id: parseInt(e.target.value) };
                  });
                }}
                name="nauczyciel_id"
                title="nauczyciel_id"
              />
            </div>
            <div className="insert-section-row">
              <label htmlFor="przedmiot_id">Id przedmiotu</label>
    
              <input
                type="number"
                value={value?.przedmiot_id}
                onChange={(e) => {
                  setValue((prev: ISubjectClassDTO | undefined) => {
                    return { ...prev!, przedmiot_id: parseInt(e.target.value) };
                  });
                }}
                name="przedmiot_id"
                title="Id przedmiotu"
              />
            </div>
          </div>
          <button onClick={handleClick}>Dodaj</button>
        </div>
      );
}

export default SubjectClassesInsertSection