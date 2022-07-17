import React from "react";

import { useMyInvitationsQuery } from "src/generated/graphql";
const UserInvitation =()=>{

  const { data, loading, error } = useMyInvitationsQuery({
       variables: {
      },
    });




}
