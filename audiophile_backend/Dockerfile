FROM python:3-alpine

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /backend

COPY ./requirements.txt requirements.txt

RUN python -m pip install --upgrade pip \
    python -m pip install -r requirements.txt

COPY . .