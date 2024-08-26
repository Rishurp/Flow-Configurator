import newTab from "../assets/newTab.svg";
import Information from "../assets/information.svg";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#FFAD62", // Default border color
    },
    "&:hover fieldset": {
      borderColor: "#FFAD62", // Border color on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FFAD62", // Border color when focused
    },
  },

  width: "100%",
  "& .MuiInputLabel-root": {
    color: "gray", // Default label color
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#B7B7B7", // Label color when focused
  },
});

const RightPanel = () => {
  return (
    <div>
      <div className="bg-[#363636] z-0 relative h-[95.6vh] text-white p-4 ">
        <p className="font-bold text-xl">cart_campaign</p>
        <div className="pt-6 flex items-center ">
          <div>
            <img src={Information} alt="info" />
          </div>
          <div className="px-2">Last 2 commits scanned</div>
        </div>
        <div className="pt-2 flex items-center ">
          <div>
            <img src={Information} alt="info" />
          </div>
          <div className="px-2">5 entry points identified</div>
        </div>

        <div className="dropdown pt-3">
          <p>Selected flow</p>
          <select className="bg-inherit border-[1px] px-2 py-1 mt-2  border-D9D9D9 w-full">
            <option>Post/carts{"{cart_id}"}</option>
          </select>
        </div>

        <div className="dependencies mt-3 ">
          <p>Dependencies</p>
          <p className="text-[#B7B7B7] pt-2  ">
            Select the one you want to mock{" "}
          </p>
          <div className="checkbox flex py-2 justify-between items-center">
            <div className="input ">
              <input type="checkbox" id="httpx" />
              <label className="px-2" htmlFor="httpx">
                httpx
              </label>
            </div>
            <div>
              <img src={newTab} alt="" />
            </div>
          </div>
          <div className="checkbox flex py-2 justify-between items-center">
            <div className="input ">
              <input type="checkbox" id="product_client" />
              <label className="px-2" htmlFor="product_client">
                product_client
              </label>
            </div>
            <div>
              <img src={newTab} alt="" />
            </div>
          </div>
          <div className="checkbox flex py-2 justify-between items-center">
            <div className="input ">
              <input type="checkbox" id="sqlalchemy.orm" />
              <label className="px-2" htmlFor="sqlalchemy.orm">
                sqlalchemy.orm
              </label>
            </div>
            <div>
              <img src={newTab} alt="" />
            </div>
          </div>
          <div className="checkbox flex py-2 justify-between items-center">
            <div className="input ">
              <input type="checkbox" id="cart_crud" />
              <label className="px-2" htmlFor="cart_crud">
                cart_crud
              </label>
            </div>
            <div>
              <img src={newTab} alt="" />
            </div>
          </div>
          <div className="checkbox flex py-2 justify-between items-center">
            <div className="input ">
              <input type="checkbox" id="cartModel" />
              <label className="px-2" htmlFor="cartModel">
                cartModel
              </label>
            </div>
            <div>
              <img src={newTab} alt="" />
            </div>
          </div>
        </div>
        <div className="database mt-3 ">
          <p>Databases</p>
          <p className="text-[#B7B7B7] pt-2  ">
            Select if you want to mock databases
          </p>

          <div className="checkbox flex py-2 justify-between items-center">
            <div className="input ">
              <input type="checkbox" id="dbopt1" />
              <label className="px-2" htmlFor="dbopt1">
                I want to mock databases
              </label>
            </div>
            <div>
              <img src={newTab} alt="" />
            </div>
          </div>
          <div className="checkbox flex py-2 justify-between items-center">
            <div className="input ">
              <input type="checkbox" id="dbopt2" />
              <label className="px-2" htmlFor="dbopt2">
                I dont want to mock database
              </label>
            </div>
            <div>
              <img src={newTab} alt="" />
            </div>
          </div>
        </div>
        <div clasName="InputFields   ">
          <p className="pt-2 mb-2"> Database Configurations</p>
          <div className="pt-2">
            <CustomTextField label="Database User" variant="outlined" />
          </div>

          <div className="pt-4">
            <CustomTextField label="Database Password" variant="outlined" />
          </div>
          <div className="pt-4">
            <CustomTextField label="Database Hostname" variant="outlined" />
          </div>
        </div>
      </div>
      <div className=" mt-2 border-t-2 h-[8vh] w-[19.2%] absolute right-0 bottom-0 border-t-[#505050]  bg-[#363636] z-1 flex justify-end items-center ">
        <div className="px-4">
          <button className="px-6 py-2 bg-[#009FF9] text-[#FFFFFF] drop-shadow-2xl rounded-md">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
