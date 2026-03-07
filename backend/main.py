from fastapi import FastAPI
from app.presentation.routers import test_router

app = FastAPI()

app.include_router(test_router.router)
