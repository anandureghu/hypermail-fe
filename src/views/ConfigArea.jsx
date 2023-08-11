import React, { useState } from "react";
import Button from "../components/Button";
import { H2 } from "../components/common";
import { useDispatch, useSelector } from "react-redux";
import { addText } from "../store/slice/configSlice";

const ConfigArea = ({ prev }) => {
  const config = useSelector((state) => state.config);
  const { fields } = useSelector((state) => state.app);
  const dispatch = useDispatch();
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
        {config.texts.map((text) => {
          return (
            <div className="mb-5 border-dashed border-2">
              <div>
                {/* <label htmlFor="key" className="">
                  Choose field name
                </label> */}
                <select
                  name="key"
                  id="key"
                  className="w-full p-3 px-5 outline-none border-none bg-white mb-3"
                  placeholder="Choose a filed name from csv"
                >
                  {fields.map((field) => {
                    return <option value="filed">{field}</option>;
                  })}
                </select>
              </div>

              <div>
                {/* <label htmlFor="">Set Position</label> */}
                <div className="flex gap-5">
                  <input type="numbe" placeholder="x" className="p-3 px-5" />
                  <input type="number" placeholder="y" className="p-3 px-5" />
                  <input type="number" placeholder="max" className="p-3 px-5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end">
        <Button onClick={prev} label="Prev" />
      </div>
    </div>
  );
};

export default ConfigArea;
