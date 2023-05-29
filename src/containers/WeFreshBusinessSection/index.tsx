import { Document } from "@contentful/rich-text-types";
import React, { useState } from "react";
// Components
import ActionButton from "../../common/components/Button";
import FlexCenter from "../../common/components/FlexCenter";
import FlexColumn from "../../common/components/FlexColumn";
import TextInput from "../../common/components/Input";
import Modal from "../../common/components/Modal";
import RichTextRenderer from "../../common/components/RichTextRenderer";
import SectionHeadings from "../../common/components/SectionHeadings";
import SectionWrapper from "../../common/components/SectionWrapper";
// Styled imports
import { FormWrapper } from "../../common/GlobalStyles/styled";
// Type Imports
import { Button, RichText } from "../../Types";
import { BusinessDescriptionsWrapper, BusinessWrapper } from "./styled";
// Types
type Props = {
  data: {
    businessButton: Button;
    businessDescription: RichText;
    businessTitle: RichText;
  };
};

const index = ({ data }: Props) => {
  const [number, setNumber] = useState<number>();
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => setIsOpen(false);

  const handelSubmit = () => {
    if (!number) {
      return alert("Please Enter a Specific Value");
    }
    setIsOpen(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setNumber(Number(event.target.value));

  return (
    <SectionWrapper
      paddingTop={{ sm: 88, md: 88, lg: 95, xl: 103, "2xl": 103 }}
      paddingBottom={{ sm: 103, md: 103, lg: 96, xl: 88, "2xl": 88 }}
      className="!pt-[88px] pb-[103px]">
      {/* MODAL */}
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <p>You Entered {number}</p>
      </Modal>
      <BusinessWrapper>
        <BusinessDescriptionsWrapper>
          {/* Title */}
          <SectionHeadings className="section-heading">
            <RichTextRenderer
              paraStyle="hidden"
              json={data.businessTitle.json}
            />
          </SectionHeadings>
          {/* Description */}
          <RichTextRenderer
            paraStyle="w-full md:max-w-[540px] text-center"
            json={data.businessDescription.json}
          />
        </BusinessDescriptionsWrapper>
        {/* FORM */}
        <FormWrapper flexGap={6}>
          <TextInput
            placeholder="Enter phone number"
            state={number}
            onChangeFunc={handleChange}
            type="number"
          />
          <ActionButton
            onClickFunc={handelSubmit}
            backgroundcolor={data?.businessButton.backgroundColor}>
            {data.businessButton.text}
          </ActionButton>
        </FormWrapper>
      </BusinessWrapper>
    </SectionWrapper>
  );
};

export default index;
