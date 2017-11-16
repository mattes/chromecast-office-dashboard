run-sender:
	docker run -it --rm -v $(PWD)/app/sender:/usr/share/nginx/html:ro -p 8090:80 nginx:1.13-alpine
