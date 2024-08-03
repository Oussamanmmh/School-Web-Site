import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Avatar,
    Button,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
  } from "@material-tailwind/react";
  import logo from "../assets/logo.jpg"
   
  export default function ContactUs() {
    return (
     <Popover placement="bottom-end ">
        <PopoverHandler>
          <Button className="ml-20">Contact Us</Button>
        </PopoverHandler>
        <PopoverContent className="w-72 z-50">
          <div className="mb-4 flex items-center gap-4 border-b border-blue-gray-50 pb-4">
            <Avatar src={logo} alt="LOGO" />
            <div>
              <Typography variant="h6" color="blue-gray">
               Smart langue
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="font-medium text-blue-gray-500"
              >
                Why Not Start ?
                Why Not Smart :p
              </Typography>
            </div>
          </div>
          <List className="p-0">
            <a href="tel:  0658 01 47 61" className="text-initial font-medium text-blue-gray-500">
              <ListItem>
                <ListItemPrefix>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H3.153C3.38971 0.000108969 3.6187 0.0841807 3.79924 0.23726C3.97979 0.390339 4.10018 0.602499 4.139 0.836L4.879 5.271C4.91436 5.48222 4.88097 5.69921 4.78376 5.89003C4.68655 6.08085 4.53065 6.23543 4.339 6.331L2.791 7.104C3.34611 8.47965 4.17283 9.72928 5.22178 10.7782C6.27072 11.8272 7.52035 12.6539 8.896 13.209L9.67 11.661C9.76552 11.4695 9.91994 11.3138 10.1106 11.2166C10.3012 11.1194 10.5179 11.0859 10.729 11.121L15.164 11.861C15.3975 11.8998 15.6097 12.0202 15.7627 12.2008C15.9158 12.3813 15.9999 12.6103 16 12.847V15C16 15.2652 15.8946 15.5196 15.7071 15.7071C15.5196 15.8946 15.2652 16 15 16H13C5.82 16 0 10.18 0 3V1Z"
                      fill="#90A4AE"
                    />
                  </svg>
                </ListItemPrefix>
                0658 01 47 61
              </ListItem>
            </a>
            <a href="mailto:smartlangue@gmail.com" className="text-initial font-medium text-blue-gray-500">
              <ListItem>
                <ListItemPrefix>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.00299 5.884L9.99999 9.882L17.997 5.884C17.9674 5.37444 17.7441 4.89549 17.3728 4.54523C17.0015 4.19497 16.5104 3.99991 16 4H3.99999C3.48958 3.99991 2.99844 4.19497 2.62717 4.54523C2.2559 4.89549 2.03259 5.37444 2.00299 5.884Z"
                      fill="#90A4AE"
                    />
                    <path
                      d="M18 8.11798L10 12.118L2 8.11798V14C2 14.5304 2.21071 15.0391 2.58579 15.4142C2.96086 15.7893 3.46957 16 4 16H16C16.5304 16 17.0391 15.7893 17.4142 15.4142C17.7893 15.0391 18 14.5304 18 14V8.11798Z"
                      fill="#90A4AE"
                    />
                  </svg>
                </ListItemPrefix>
                smartlangue@gmail.com
              </ListItem>
            </a>
          </List>
        </PopoverContent>
      </Popover>
    );
  }