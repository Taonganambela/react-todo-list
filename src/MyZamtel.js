import { Stack, Button, IconButton } from "@mui/material";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import LteMobiledataOutlinedIcon from "@mui/icons-material/LteMobiledataOutlined";
import LtePlusMobiledataOutlinedIcon from "@mui/icons-material/LtePlusMobiledataOutlined";
import MiscellaneousServicesOutlinedIcon from "@mui/icons-material/MiscellaneousServicesOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import RedeemOutlinedIcon from "@mui/icons-material/RedeemOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";

import pic from "./pictures/pic.png";
import ZamtelLogo from "./pictures/ZamtelLogo.png";

const MyZamtel = () => {
  return (
    <div className="p-0 m-0 flex bg-white">
      <nav className="w-1/4 mr-5 p-2 col-span-1 bg-gradient-to-t from-[#22b242] to-[#903Ce5] text-white">
        <div className="flex justify-center">
          <img src={ZamtelLogo} alt=" logo" className="mb-4" />
        </div>
        <div className="p-2 text-left ">
          <p className="p-4 hover:bg-[#22b24c] hover:rounded-xl">
            <GridViewOutlinedIcon className="inline-block mr-2" />
            Overview
          </p>

          <p className="p-4 hover:bg-[#22b24c] hover:rounded-xl">
            <SyncAltOutlinedIcon className="inline-block mr-2" />
            Post Paid
          </p>
          <p className="p-4 hover:bg-[#22b24c] hover:rounded-xl">
            <MonetizationOnOutlinedIcon className="inline-block mr-2" />
            Mobile Money
          </p>
          <p className="p-4 hover:bg-[#22b24c] hover:rounded-xl">
            <LtePlusMobiledataOutlinedIcon className="inline-block mr-2" />
            Corporate Voice & Data LTE
          </p>
          <p className="p-4 hover:bg-[#22b24c] hover:rounded-xl">
            <LteMobiledataOutlinedIcon className="inline-block mr-2" />
            Prepaid Services LTE
          </p>

          <p className="p-4 hover:bg-[#22b24c] hover:rounded-xl">
            <RedeemOutlinedIcon className="inline-block mr-2" />
            Products & Services
          </p>
          <p className="mb-11 p-4 hover:bg-[#22b24c] hover:rounded-xl">
            <MiscellaneousServicesOutlinedIcon className="inline-block mr-2" />
            Settings
          </p>

          <hr className="mb-1 border-[#838283]" />

          <div className="object-center">
            <div className="flex items-left mb-11">
              <img
                src={pic}
                alt="portrait"
                className="rounded-full h-12 w-11 mt-6 mr-2 "
              />

              <div>
                <div className="inline ml-2">
                  <p className="font-semibold ">Username</p>
                  <p className="mb-10 text-xs ">View profile</p>
                </div>
              </div>
            </div>
          </div>

          <Stack spacing={3} direction="row" display="block">
            <Button
              variant="contained"
              size="medium"
              disableElevation
              startIcon={<LogoutIcon />}
              className="text-center p-4  bg-transparent ml-4 rounded-sm w-3/4"
              style={{ backgroundColor: "#3da874" }}
            >
              Logout
            </Button>
          </Stack>
        </div>
      </nav>

      <artical className="grid w-3/4">
        <div className="flex justify-between items-center">
           <div className="text-left inline">
            <h6 className="text-xl font-bold h-12 mt-5">Hello Username</h6>
          </div> 

              <div className="flex space-x-4 mr-4 items-center">
              <NotificationsOutlinedIcon className="text-gray-400" />
              <div className="border-gray-300 rounded-lg ">
              <input
                  type="text"
                  placeholder="Search...  "
                  className=" right-4 border border-none focus:outline-none rounded-md "
                />
                <IconButton >
                <SearchOutlinedIcon />
                </IconButton>
              </div>
               

              </div>
          </div>
        
       

        <hr className="mb-5  border-[#903Ce5]" />
        <div className="">
          <p className="text-[#22b242] text-xl font-bold inline p-4 border-2  border-r-[#22b242] border-b-[#22b242]  border-t-white border-l-white ">
            Home
          </p>
          <p className="text-xl font-bold inline p-4 border-2 border-l-[#903Ce5] border-b-[#22b242]  border-r-white border-t-white">
            Bills
          </p>
        </div>

        <div className="flex mt-20 mb-6 ">
          <div>
            <p className="gray-500 inline text-gray-400">
              Current Packages balances
            </p>
          </div>
          <div>
            <p className="gray-500  absolute text-left inline right-8 text-gray-400">
              View all
            </p>
          </div>
        </div>

        <div className=" rounded-md bg-gradient-to-b from-[#903Ce5] to-[#22b242] p-1">
          <div className=" h-full  bg-white back">
            <div className="p-4 rounded-xl  ">
              <div className="  grid grid-cols-3 sm:grid-cols-1 items-center gap-4">
                <div className="w-full flex flex-row  justify-center p-4">
                  <div className="block p-4 w-full">
                    <p className="text-gray-400">Voice minutes:</p>
                    <p>
                      <span className="font-bold">20 min</span>
                    </p>
                  </div>
                  <div className="p-4 w-full block border border-l-[#903Ce5] border-r-[#903Ce5] border-t-white border-b-white">
                    <p className="text-gray-400">Talktime balance:</p>
                    <span className="font-bold">K0.0</span>
                  </div>

                  <div className="p-4 w-full block">
                    <p className="text-gray-400">Data Bundle:</p>
                    <p>
                      <span className="font-bold">1.0GB</span>
                    </p>
                    <p className="text-gray-400">20/100 used</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="p-4 mr-2 text-gray-400">Data & Voice LTE packages</h3>
        <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-4 text-white ">
          <button className="m-4 p-8 bg-[#903Ce5] rounded-xl">
            <p className="text-xs text-gray-300">Package Name</p>{" "}
            <h3 className="font-bold">Package details</h3>
          </button>
          <button className="m-4 p-8 bg-[#903Ce5] rounded-xl">
            <p className="text-xs text-gray-300">Package Name </p>{" "}
            <h3 className="font-bold">Package details</h3>
          </button>
          <button className="m-4 p-8 bg-[#903Ce5] rounded-xl">
            <p className="text-xs text-gray-300">Package Name</p>{" "}
            <h3 className="font-bold">Package details</h3>
          </button>
          <button className="m-4 p-8 bg-[#903Ce5] rounded-xl">
            <p className="text-xs text-gray-300">Package Name</p>{" "}
            <h3 className="font-bold">Package details</h3>
          </button>
          <button className="m-4 p-8 bg-[#903Ce5] rounded-xl">
            <p className="text-xs text-gray-300">Package Name</p>{" "}
            <h3 className="font-bold">Package details</h3>
          </button>
          <button className="m-4 p-8 bg-[#903Ce5] rounded-xl">
            <p className="text-xs text-gray-300">Package Name</p>{" "}
            <h3 className="font-bold">Package details</h3>
          </button>
        </div>
      </artical>
    </div>
  );
};

export default MyZamtel;
