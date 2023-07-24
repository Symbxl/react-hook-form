import { useForm, Controller } from 'react-hook-form';
import styled from "styled-components"

interface FormData {
  name: string;
  email: string;
  budget: string;
  referral: string;
  message: string;
}

const ContactFormTwo = () => {
  const { handleSubmit, control } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data)
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)} id="form">
      <FormControl>
        <Title>Contact 👋</Title>
        <Label htmlFor="referral">What can we help you with?</Label>
        <Controller
          name="referral"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <Select {...field} id="referral">
              <Option disabled value="">
                Select what we can help you with
              </Option>
              <Option>Option 1</Option>
              <Option>Option 2</Option>
              <Option>Option 3</Option>
              <Option>Option 4</Option>
              <Option>Option 5</Option>
            </Select>
          )}
        />
      </FormControl>
      <FormControl>
        <Label htmlFor="name">Name</Label>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => <Input {...field} type="text" placeholder="Name" id="name" />}
        />
      </FormControl>
      <FormControl>
        <Label htmlFor="email">Email </Label>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{ required: true, pattern: /^\S+@\S+$/i }}
          render={({ field }) => <Input {...field} type="email" placeholder="Email" id="email" />}
        />
      </FormControl>
      <FormControl>
        <Label htmlFor="message">Message</Label>
        <Controller
          name="message"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => <TextArea {...field} id="message" />}
        />
      </FormControl>
      <SubmitButton type="submit">Send</SubmitButton>
    </FormContainer>
  );
};

export default ContactFormTwo;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 750px;
`;


const Title = styled.h2`
  align-self: center;
  font-size: 35px;
  font-weight: bold;
  text-align: start;
  margin: 30px;
  margin-left: 3rem;
  font-weight: 500;
`;

const Label = styled.label`
  font-size: 15px;
  margin-bottom: 8px;
  align-self: start;
  margin: 1rem;
  margin-left: 4.2rem;
  font-weight: 500;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  max-width: 1000px;
  min-height: 60vh;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;


const Input = styled.input`
  background-color: #f6f6f6;
  width: 600px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid white;
  font-size: 13px;
  ::placeholder {
  color: #dcdcdc;
}
`;

const Select = styled.select`
  background-color: #f6f6f6;
  width: 625px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid white;
  font-size: 14px;
  appearance: none;
  ::placeholder {
  color: #dcdcdc;
}
`;

const Option = styled.option``;

const TextArea = styled.textarea`
  width: 600px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #dcdcdc;
  font-size: 13px;
  resize: vertical;
  height: 120px;
  ::placeholder {
  color: #dcdcdc;
}
`;

const SubmitButton = styled.button`
  width: 400px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #000000;
  align-self: start;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  margin: 2rem;
  margin-left: 4rem;
`;