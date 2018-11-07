run:
	cd frontend && rm -rf node_modules/ package-lock.json && npm i && npm run-script build && cd ..
	cd frontend.1 && rm -rf node_modules/ package-lock.json && npm i && npm run-script build && cd ..
	docker-compose up