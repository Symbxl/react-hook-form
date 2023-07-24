import { useForm, Controller } from 'react-hook-form';
import styled from "styled-components"

interface FormData {
  name: string;
  email: string;
  budget: string;
  referral: string;
  message: string;
}

const ContactForm = () => {
  const { handleSubmit, control } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data)
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)} id="form">
      <Title>Contact 👋</Title>
      <FormSection>
        <FormControl>
          <Label htmlFor="name"> Your Name</Label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => <Input {...field} type="text" placeholder="Name" id="name" />}
          />
        </FormControl>
        <FormControl>
          <Label htmlFor="email">Your Email </Label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: true, pattern: /^\S+@\S+$/i }}
            render={({ field }) => <Input {...field} type="email" placeholder="Email" id="email" />}
          />
        </FormControl>
      </FormSection>
      <FormSection>
        <FormControl>
          <Label htmlFor="budget">Project Budget</Label>
          <Controller
            name="budget"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <Input {...field} type="text" placeholder="Project Budget" id="budget" />
            )}
          />
        </FormControl>
        <FormControl>
          <Label htmlFor="referral">How did you hear about me?</Label>
          <Controller
            name="referral"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <Select {...field} id="referral">
                <Option disabled value="">
                  Select Social Media
                </Option>
                <Option>Instagram</Option>
                <Option>Twitter</Option>
                <Option>Threads</Option>
                <Option>Facebook</Option>
                <Option>Other</Option>
              </Select>
            )}
          />
        </FormControl>
      </FormSection>
      <FormSection>
        <FormControl>
          <Label htmlFor="message">Message</Label>
          <Controller
            name="message"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => <TextArea {...field} placeholder="Message" id="message" />}
          />
        </FormControl>
      </FormSection>
      <SubmitButton type="submit">Submit</SubmitButton>
    </FormContainer>
  );
};

export default ContactForm;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 15px;
  margin-bottom: 8px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  min-height: 60vh;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  align-self: start;
  font-size: 35px;
  font-weight: bold;
  text-align: start;
  margin: 30px;
  margin-left: 3rem;
  font-weight: 500;
`;

const FormSection = styled.div`
  display: flex;
  margin: 15px 25px;

  & > :first-child {
    margin-right: 10px;
  }
  
  & > :last-child {
    margin-left: 10px;
  }
`;

const Input = styled.input`
  background-color: #f6f6f6;
  width: 400px;
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
  width: 425px;
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
  width: 850px;
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
  margin-left: 3rem;
`;