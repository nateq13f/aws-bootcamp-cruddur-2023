FROM 579018833036.dkr.ecr.us-east-1.amazonaws.com/cruddur-python:3.10-slim-buster

#make new folder INSIDE container
WORKDIR /backend-flask

#outside to inside container
#conatins libraries to run the app
COPY requirements.txt requirements.txt

#INSIDE app
RUN pip3 install -r requirements.txt

COPY . .

# Set env var inside container that will remain while conatainer is running
ENV FLASK_DEBUG=1

EXPOSE ${PORT}

#python3 -m flask run --host=0.0.0.0 --port=4567
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0", "--port=4567"]