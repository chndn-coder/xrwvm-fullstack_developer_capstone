FROM python:3.12.0-slim-bookworm

# Prevent python from creating .pyc files
ENV PYTHONDONTWRITEBYTECODE 1

# Show python logs immediately
ENV PYTHONUNBUFFERED 1

# Application folder
ENV APP=/app

# Change working directory
WORKDIR $APP

# Copy requirements file
COPY requirements.txt $APP/

# Install dependencies
RUN pip3 install --upgrade pip
RUN pip3 install -r requirements.txt

# Copy all project files
COPY . $APP

# Django runs on port 8000
EXPOSE 8000

# Give permission to shell script
RUN chmod +x /app/entrypoint.sh

# Run entrypoint script first
ENTRYPOINT ["/bin/bash","/app/entrypoint.sh"]

# Start Django using gunicorn
CMD ["gunicorn", "--bind", ":8000", "--workers", "3", "djangoproj.wsgi"]