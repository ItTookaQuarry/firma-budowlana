"use client"
import React from 'react'



import {CircularProgress} from "@nextui-org/react";

export default function Loading() {
  return (

    <CircularProgress size="lg" aria-label="Loading..."/>
  );
}