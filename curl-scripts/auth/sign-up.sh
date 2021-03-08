curl "http://localhost:4741/sign-up" \
--request POST \
--header "Content-Type: application/json" \
--data '{
  "credentials": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PASSWORD}"'",
   "password_confirmation": "'"${PASSWORD}"'"
  }
}'
echo
