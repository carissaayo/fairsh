import React, { useCallback, useEffect } from "react";
import { ColorRing } from "react-loader-spinner";

import { useManageAccountStore } from "../context/account/getAccount";
import ShowToaster from "../components/core/ShowToaster";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import ChangePasswordCon from "../components/ChangePasswordComponents/ChangePasswordCon";
import { ScrollArea, ScrollBar } from "../components/ui/scroll-area";
import ProfileCon from "../components/ProfileComponentsCon/ProfileCon";
import VerifyEmailCon from "../components/VerifyEmailComponents/VerifyEmailCon";
import { useUserProfileStore } from "../context/auth/getProfile";
import axiosClient from "../lib/axiosClient";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useVerifyEmailStore } from "../context/auth/verifyEmailStore";

const ManageAccount = () => {
  const loading = useUserProfileStore((state) => state.loading);
  const setLoading = useUserProfileStore((state) => state.setLoading);
  const setProfile = useUserProfileStore((state) => state.setProfile);
  const profile = useUserProfileStore((state) => state.profile);
  const verified = useVerifyEmailStore((state) => state.verified);

  const fetchProfile = useCallback(async () => {
    setLoading(true);
    await axiosClient
      .get(`/admin/auth/profile`)
      .then((response) => {
        console.log(response.data);
        setProfile(response.data.data.profile);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        toast.error("something went wrong");
      });
  }, [verified]);

  const { mutate: fetchProfileFn } = useMutation({
    mutationFn: () => fetchProfile(),
  });
  useEffect(() => {
    fetchProfileFn();
  }, [verified]);
  return (
    <main className="w-full h-full   overflow-x-hidden overflow-y-scroll mb-[400px] md:mb-40 bg-white ">
      {loading ? (
        <div className="w-full flex items-center justify-center flex-1 h-full ">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : (
        <>
          <section className="w-full mb-48 lg:mb-32 px-4 xs:px-8 pt-8">
            <div className="w-full mb-8">
              <h1 className="font-bold text-3xl">Manage Account</h1>
            </div>
            <section className="w-full flex justify-center">
              <Tabs
                defaultValue={
                  profile.emailVerified ? "account" : "verify-email"
                }
                className=" w-[100%]   md:w-[90%] mx-auto"
              >
                <ScrollArea className="w-full ">
                  <TabsList className=" min-w-[470px] overflow-x-scroll overflow-y-hidden xs:overflow-hidden w-full md:w-[90%] h-[50px] ">
                    {!profile.emailVerified && (
                      <TabsTrigger
                        value="verify-email"
                        className="flex-1 text-lg"
                      >
                        Verify Email
                      </TabsTrigger>
                    )}
                    <TabsTrigger value="account" className="flex-1 text-lg">
                      Profile
                    </TabsTrigger>
                    <TabsTrigger value="password" className="flex-1 text-lg">
                      Change Password
                    </TabsTrigger>
                    {/* <TabsTrigger value="email" className="flex-1 text-lg">
                      Change Email
                    </TabsTrigger> */}
                  </TabsList>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
                {!profile.emailVerified && (
                  <TabsContent value="verify-email">
                    <VerifyEmailCon />
                  </TabsContent>
                )}
                <TabsContent value="account">
                  <ProfileCon />
                </TabsContent>
                <TabsContent value="password">
                  <ChangePasswordCon />
                </TabsContent>
                {/* <TabsContent value="email">
                  <ChangeEmailCon />
                </TabsContent> */}
              </Tabs>
            </section>
          </section>
          <ShowToaster />
        </>
      )}
    </main>
  );
};

export default ManageAccount;
