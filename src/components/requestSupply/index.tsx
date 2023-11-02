import { Drawer } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react'
import Seprator from '../separator';
import { HiMinus, HiPlus } from 'react-icons/hi';
import Button from '../buttons';

const RequestSupply = ( props : any) => {
    const [searchInput, setSearchInput] = useState<any>("");
    const [addedSupply, setAddedSupply] = useState<any>([
      {
        name: "Tissue Box (100 pcs)",
        count: 1,
        id: 1,
      },
      {
        name: "Dettol Handwash (1L)",
        count: 1,
        id: 2,
      },
      {
        name: "Green Tea Packet",
        count: 1,
        id: 3,
      },
      {
        name: "Sandwich Bread",
        count: 1,
        id: 4,
      },
    ]);

    const searchSupply = (e: any) => {
        setSearchInput(e.target.value);
      };
    
      const updateCount = (itemId: any, newCount: any) => {
        if (newCount !== 0) {
          const updatedSupply = addedSupply.map((item: any) => {
            if (item.id === itemId) {
              return { ...item, count: newCount };
            }
            return item;
          });
    
          setAddedSupply([...updatedSupply]);
    
          console.log(
            "🚀 ~ file: profile.tsx:68 ~ updateCount ~ updatedSupply:",
            updatedSupply
          );
        } else {
          const updatedSupply = addedSupply.filter((item: any) => {
            return item.id !== itemId;
          });
          setAddedSupply([...updatedSupply]);
          console.log(
            "🚀 ~ file: profile.tsx:76 ~ updateCount ~ updatedSupply:",
            updatedSupply
          );
        }
      };
  return (
    <div>
<Drawer
          placement={"bottom"}
          width={500}
          onClose={props.onClose}
          open={props.open}
          height={"100vh"}
          closable={false}
          destroyOnClose={true}
          className={`font-space-grotesk !bg-zo-dark`}
        >
          <div
            className={`font-space-grotesk relative flex items-center justify-center w-full mt-12 lg:mt-0`}
          >
            <div className="absolute top-1/2 -translate-y-1/2 left-0">
              <div
                className="h-8 w-8 relative"
                onClick={props.onClose}
              >
                <Image
                  src="/assets/svgs/leftArrow.svg"
                  alt="Room"
                  layout="fill"
                />
              </div>
            </div>
            <h2 className="font-bold text-zo-primary !font-space-grotesk">
              Request Hosuekeeping Supplies
            </h2>
          </div>
          <div className="mt-8">
            <div className="relative mb-6 bg-zo-stroke flex items-center justify-between gap-2 h-14 border border-zo-stroke hover:border-zo-primary focus:outline-zo-primary">
              <span className="h-6 w-6 ml-4 relative">
                <Image src="/assets/svgs/Search.svg" alt="Room" layout="fill" />
              </span>
              <input
                onChange={(e) => searchSupply(e)}
                value={searchInput}
                className="w-full p-2 bg-zo-stroke outline-none font-space-grotesk placeholder:text-zo-secondary placeholder:font-space-grotesk text-zo-primary"
                type="text"
                name="search"
                id="search"
                placeholder="Add item"
              />
              <span
                onClick={() => setSearchInput("")}
                className="h-6 w-6 mr-4 relative"
              >
                <Image src="/assets/svgs/Cancel.svg" alt="Room" layout="fill" />
              </span>
              {searchInput ? (
                <>
                  <div className="absolute w-full top-[105%] bg-zo-stroke shadow-xl">
                    <div className="text-zo-primary p-6">
                      <p>Tissue Box (100 pcs)</p>
                    </div>
                    <Seprator type="black" />
                    <div className="text-zo-primary p-6">
                      <p>Tissue Box (200 pcs)</p>
                    </div>
                  </div>
                </>
              ) : null}
            </div>

            <div className="space-y-1">
              {addedSupply?.length &&
                addedSupply?.map((item: any) => (
                  <div
                    key={item?.id}
                    className="flex items-center justify-between gap-4 bg-zo-stroke p-6 text-zo-primary"
                  >
                    <p>{item?.name}</p>
                    <div className="flex items-center text-lg gap-4">
                      <button
                        onClick={() => updateCount(item?.id, item?.count - 1)}
                        className="text-zo-primary disabled:text-zo-secondary"
                      >
                        <HiMinus />
                      </button>
                      <span className={"text-zo-highlight"}>{item?.count}</span>
                      <button
                        onClick={() => updateCount(item?.id, item?.count + 1)}
                        className="text-zo-primary"
                      >
                        <HiPlus />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
            <div className="fixed bottom-6 left-0 left w-full p-6">
            <Button
              text="Submit Request"
              onClick={() => {
                props.onClose();

              
              }}
            />
          </div>
          </div>
        </Drawer>
    </div>
  )
}

export default RequestSupply