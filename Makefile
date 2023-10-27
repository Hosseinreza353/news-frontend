
build-dev:
	docker build -f Dockerfile.dev -t news-app:1.0 .

build-prod:
	docker build -f Dockerfile -t news-app:1.0 .

run-dev:
	docker run -d -it -rm -p 3000:3000 -name news-app-1 news-app:1.0
