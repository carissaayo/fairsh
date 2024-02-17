import { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ColorRing } from "react-loader-spinner";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Button } from "../components/ui/button";
import EditRetailer from "../components/RetailersComponents/EditRetailer";
import SuspendRetailer from "../components/RetailersComponents/SuspendRetailer";
import Header from "../components/ReatailerPageConmponents/Header";
import ShowToaster from "../components/core/ShowToaster";

import axiosClient from "../lib/axiosClient";
import { useLoginStore } from "../context/auth/loginStore";
import { useRetailerPage } from "../context/Retailers/getRetailerPage";

import profileImg from "../assets/images/noImg.jfif";

const RetailerPage = () => {
  const isAdmin = useLoginStore((state) => state.user.profile.adminId);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const queryClient = useQueryClient();
  const loading = useRetailerPage((state) => state.loading);
  const setLoading = useRetailerPage((state) => state.setLoading);
  const setGadgets = useRetailerPage((state) => state.setGadgets);
  const setCustomers = useRetailerPage((state) => state.setRetailersCustomers);
  const setSales = useRetailerPage((state) => state.setRetailersSales);

  const {
    state: { retailer },
  } = useLocation();

  const fetchRetailergadget = useCallback(async () => {
    setLoading(true);
    await axiosClient
      .get(`/admin/retailers/gadgets/${retailer._id}`, {})
      .then((response) => {
        console.log(response.data?.data);
        setGadgets(response.data?.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);

        toast.error("something went wrong");
        return error;
      });
  }, [retailer?._id]);

  const fetchRetailerCustomers = useCallback(async () => {
    setLoading(true);
    await axiosClient
      .get(`/admin/retailers/customers/${retailer._id}`, {})
      .then((response) => {
        console.log(response.data?.data);
        setCustomers(response.data?.data.customers);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);

        toast.error("something went wrong");
        return error;
      });
  }, [retailer?._id]);

  const fetchRetailerSales = useCallback(async () => {
    setLoading(true);
    await axiosClient
      .get(`/admin/retailers/sales/${retailer._id}`)
      .then((response) => {
        setSales(response.data?.data.sales);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);

        toast.error("something went wrong");
        return error;
      });
  }, [retailer?._id]);

  const { mutate: submitFn } = useMutation({
    mutationFn: () => fetchRetailergadget(),
  });

  const { mutate: submitFn2 } = useMutation({
    mutationFn: () => fetchRetailerCustomers(),
  });

  const { mutate: submitFn3 } = useMutation({
    mutationFn: () => fetchRetailerSales(),
  });

  useEffect(() => {
    submitFn();
    submitFn2();
    submitFn3();
  }, []);

  return (
    <main className="w-full h-full pt-8 px-8 overflow-y-scroll mb-40 overflow-x-hidden">
      <div className="w-full flex justify-between items-center mb-10">
        <Button
          variant="ghost"
          className="text-lg hover:bg-transparent"
          onClick={goBack}
        >
          <ChevronLeftIcon className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>
      {isAdmin && (
        <div className="w-full mb-8 flex justify-end gap-8 ">
          <EditRetailer />

          <SuspendRetailer retailerEmail={retailer?.userId.email} />
        </div>
      )}
      <section className="flex  flex-col xl:flex-row items-center justify-between border-b border-opacity-50 pb-8 gap-8 mb-10">
        <div className="flex-1 w-full">
          <img
            src={retailer?.picture[0] ?? profileImg}
            alt="profile-img"
            className="object-cover w-full h-[400px] xl:w-[500px] xl:h-[300px] rounded-lg"
          />
        </div>
        <div className="flex-1 xl:flex-[3] w-full md:w-auto">
          <h1 className="font-bold text-3xl mb-6">{retailer?.name}</h1>
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-12 gap-y-6 xl:gap-x-6 xl:gap-6">
            <p className="font-medium text-lg">
              Phone Number:{" "}
              <span className="ml-6">{retailer?.userId?.phoneNumber}</span>
            </p>
            <p className="font-medium text-lg">
              Email: <span className="ml-6">{retailer?.userId?.email}</span>
            </p>

            <p className="font-medium text-lg">
              LGA: <span className="ml-6">{retailer?.city}</span>
            </p>
            <p className="font-medium text-lg">
              Address: <span className="ml-6">{retailer?.address}</span>
            </p>
            <p className="font-medium text-lg">
              State: <span className="ml-6">{retailer?.state} State</span>
            </p>
          </div>
        </div>
      </section>
      <Header searchWord="gadget" title="gadgets" search owner />

      {loading && (
        <div className="w-full flex items-center justify-center flex-1 mb-56">
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
      )}
      <ShowToaster />
    </main>
  );
};

export default RetailerPage;
