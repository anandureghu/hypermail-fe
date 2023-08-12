import Button from "../components/Button";
import { H2 } from "../components/common";
import { useDispatch, useSelector } from "react-redux";
import {
  addFont,
  addText,
  setFile,
  setFont,
  setTexts,
} from "../store/slice/configSlice";
import { useEffect } from "react";
import { emptyFont, emptyText } from "../utils/constants";

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
    const newFont = {};
    const fontKeys = ["family", "align", "size", "color"];
    if (key === "key") {
      newText[key] = value;
    } else if (!fontKeys.includes(key)) {
      newPosition[key] = value;
    } else {
      newFont[key] = value;
    }
    newText.position = {
      ...newText.position,
      ...newPosition,
    };
    newText.font = {
      ...newText.font,
      ...newFont,
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

  const handleFontConfChange = (e, i) => {
    const key = e.target.name;
    let value = e.target.value;
    let newFont = {
      ...config.font,
    };
    if (key === "external") {
      value = e.target.checked;
      newFont = {
        ...config.font,
        [key]: value,
      };
    }
    let newFonts = [...newFont.fonts];
    newFonts = newFonts.map((font, idx) => {
      if (idx === i) {
        return {
          ...font,
          [key]: value,
        };
      }
      return font;
    });
    newFont.fonts = newFonts;
    dispatch(setFont({ font: newFont }));
  };

  useEffect(() => {
    if (!config.texts.length) {
      dispatch(setTexts({ texts: [emptyText] }));
    }
    if (!config.font.fonts.length) {
      dispatch(setFont({ font: { external: false, fonts: [emptyFont] } }));
    }
  }, []);

  return (
    <div className="transition-all">
      <H2 title={"Add Configuration"} />
      <div className="max-h-[calc(100vh-230px)] overflow-auto pr-5 pb-10 pt-2 transition">
        <div className="mb-5">
          <div className="flex justify-between items-center mb-5">
            <h3 className="font-bold text-xl">Add Texts</h3>
            <button
              onClick={() => dispatch(addText())}
              className="w-10 h-10 rounded-full gd-main-sub text-white font-bold text-2xl"
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
                      type="number"
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

                <div>
                  <div className="flex gap-5 mt-3">
                    <input
                      type="text"
                      name="family"
                      value={text.font.family}
                      placeholder="Font family"
                      className="p-3 px-5  drop-shadow outline-none border-none w-full"
                      onChange={(e) => handleTextsChange(e, i)}
                    />
                    <input
                      type="number"
                      name="size"
                      value={text.font.size}
                      placeholder="Font size"
                      className="p-3 px-5 drop-shadow outline-none border-none w-full"
                      onChange={(e) => handleTextsChange(e, i)}
                    />
                  </div>
                  <div
                    className="flex gap-5 mt-3"
                    onChange={(e) => handleTextsChange(e, i)}
                  >
                    <select
                      name="align"
                      value={text.font.align}
                      className="w-full p-3 px-5 outline-none border-none bg-white mb-3 drop-shadow h-full"
                    >
                      <option value="" disabled selected>
                        Choose text aignment
                      </option>
                      <option value="left">Left</option>
                      <option value="center">Center</option>
                      <option value="right">Right</option>
                    </select>
                    <input
                      type="text"
                      name="color"
                      value={text.font.color}
                      placeholder="Color"
                      className="py-3 px-5 drop-shadow outline-none border-none w-full h-fit"
                      onChange={(e) => handleTextsChange(e, i)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mb-5">
          <div className="flex justify-between items-center mb-5">
            <h3 className="font-bold text-xl mb-3">Fonts configuration</h3>
            <button
              onClick={() => dispatch(addFont())}
              className="w-10 h-10 rounded-full gd-main-sub text-white font-bold text-2xl"
            >
              +
            </button>
          </div>
          <div className="flex gap-3 items-center">
            <input
              type="checkbox"
              name="external"
              id="external"
              checked={config.font.external}
              onChange={handleFontConfChange}
            />
            <label htmlFor="external">Use External Fonts</label>
          </div>
          <div>
            {config.font.fonts.map((font, i) => {
              console.log(font);
              return (
                <div className="flex gap-5 border-2 border-dashed p-3 my-3">
                  <input
                    type="text"
                    placeholder="Font Family"
                    name="family"
                    value={font.family}
                    className="p-3 px-5  drop-shadow outline-none border-none w-full"
                    onChange={(e) => handleFontConfChange(e, i)}
                  />
                  <input
                    type="text"
                    name="fileName"
                    value={font.fileName}
                    placeholder="Uploaded filename"
                    className="p-3 px-5  drop-shadow outline-none border-none w-full"
                    onChange={(e) => handleFontConfChange(e, i)}
                  />
                </div>
              );
            })}
          </div>
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
    </div>
  );
};

export default ConfigArea;
