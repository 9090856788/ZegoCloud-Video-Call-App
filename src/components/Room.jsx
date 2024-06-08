/* eslint-disable no-unused-vars */
import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Room = () => {
  const userDetailsState = useSelector(
    (RootState) => RootState.userDetailsState
  );
  const { userName } = userDetailsState;

  const { id } = useParams();
  let myMeeting = async (element) => {
    // generate Kit Token
    console.log("element is : ", element);
    const appID = 1088657019;
    const serverSecret = "06b669428b59f5a21926d571ec8e3d74";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      id,
      Date.now().toString(),
      userName
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Personal link",
          url: `http://localhost:5173/room/${id}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  };
  return (
    <>
      <div
        className="myCallContainer"
        ref={myMeeting}
        style={{ width: "100vw", height: "100vh" }}
      ></div>
    </>
  );
};

export default Room;
