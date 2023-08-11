import Button from "../components/Button";
import { H2 } from "../components/common";
import { useDispatch, useSelector } from "react-redux";
import { addText, setFile, setTexts } from "../store/slice/configSlice";
import { useEffect } from "react";
import { emptyText } from "../utils/constants";

const ConfigArea = ({ prev, next }) => {
  const config = useSelector((state) => state.config);
  const { fields } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const handleTextsChange = (e, i) => {
    const key = e.target.name;
    const value = e.target.value;
    let newTexts = [...config.texts];
    const newText = { ...emptyText, ...newTexts[i] };
    const newPosition = {};
    if (key === "key") {
      newText[key] = value;
    } else {
      newPosition[key] = value;
    }
    newText.position = {
      ...newText.position,
      ...newPosition,
    };
    for (let idx = 0; idx < newTexts.length; idx++) {
      console.log(idx, i);
      if (idx === i) {
        newTexts[i] = newText;
      }
    }

    dispatch(setTexts({ texts: newTexts }));
  };

  const handleFileConfChange = (e) => {
    const key = e.target.name;
    let value = e.target.value;
    if (key === "index") value = e.target.checked;
    dispatch(setFile({ key, value }));
  };

  useEffect(() => {
    if (!config.texts.length) {
      dispatch(setTexts({ texts: [emptyText] }));
    }
  }, []);

  return (
    <div>
      <H2 title={"Add Configuration"} />
      <div className="mb-5">
        <div className="flex justify-between items-center mb-5">
          <h3 className="font-bold text-xl">Add Texts</h3>
          <button
            onClick={() => dispatch(addText())}
            className="w-10 h-10 rounded-full gd-main text-white font-bold text-2xl"
          >
            +
          </button>
        </div>
        {config.texts.map((text, i) => {
          return (
            <div className="mb-5 border-dashed border-2 p-3">
              <div>
                <select
                  name="key"
                  id="key"
                  className="w-full p-3 px-5 outline-none border-none bg-white mb-3 drop-shadow"
                  onChange={(e) => handleTextsChange(e, i)}
                  value={text.key}
                >
                  <option value="" disabled selected>
                    Choose a filed name from csv
                  </option>
                  {fields.map((field) => {
                    return <option value={field}>{field}</option>;
                  })}
                </select>
              </div>

              <div>
                <div className="flex gap-5">
                  <input
                    type="numbe"
                    placeholder="x"
                    name="x"
                    value={text.position.x}
                    className="p-3 px-5  drop-shadow outline-none border-none"
                    onChange={(e) => handleTextsChange(e, i)}
                  />
                  <input
                    type="number"
                    name="y"
                    value={text.position.y}
                    placeholder="y"
                    className="p-3 px-5  drop-shadow outline-none border-none"
                    onChange={(e) => handleTextsChange(e, i)}
                  />
                  <input
                    type="number"
                    placeholder="max"
                    name="max"
                    value={text.position.max}
                    className="p-3 px-5  drop-shadow outline-none border-none"
                    onChange={(e) => handleTextsChange(e, i)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mb-5">
        <h3 className="font-bold text-xl mb-3">Filename configuration</h3>
        <select
          name="nameKey"
          id="nameKey"
          className="w-full p-3 px-5 outline-none border-none bg-white mb-3 drop-shadow mt-3"
          onChange={handleFileConfChange}
          value={config.file.nameKey}
        >
          <option value="" disabled selected>
            Choose file name key for generated files
          </option>
          {fields.map((field) => {
            return <option value={field}>{field}</option>;
          })}
        </select>
        <div className="flex gap-3 items-center">
          <input
            type="checkbox"
            name="index"
            id="index"
            checked={config.file.index}
            onChange={handleFileConfChange}
          />
          <label htmlFor="index">Use Index for filename generation</label>
        </div>
      </div>
      <div className="flex justify-between">
        <Button onClick={prev} label="Prev" />
        <Button onClick={next} label="Next" />
      </div>
    </div>
  );
};

export default ConfigArea;
