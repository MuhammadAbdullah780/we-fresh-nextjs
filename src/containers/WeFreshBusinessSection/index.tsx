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
// Type Imports
import { Button, RichText } from "../../Types";
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
    <SectionWrapper className="pt-[88px] pb-[103px]">
      {/* MODAL */}
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <p>You Entered {number}</p>
      </Modal>
      <FlexColumn className="gap-4">
        <FlexColumn className="p-4 gap-3">
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
        </FlexColumn>
        {/* FORM */}
        <FlexCenter className="gap-6 flex-wrap">
          <TextInput
            placeholder="Enter phone number"
            state={number}
            onChangeFunc={handleChange}
            type="number"
            width="300px"
            height="35px"
          />
          <ActionButton onClickFunc={handelSubmit} className="h-[35px]">
            {data.businessButton.text}
          </ActionButton>
        </FlexCenter>
      </FlexColumn>
    </SectionWrapper>
  );
};

export default index;
