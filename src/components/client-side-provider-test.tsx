"use client";
import React, { ReactNode } from "react";

interface ClientSideProviderTestProps {
  children: ReactNode;
}

const ClientSideProviderTest: React.FC<ClientSideProviderTestProps> = ({
  children,
}) => {
  return <div>{children}</div>;
};

export default ClientSideProviderTest;
