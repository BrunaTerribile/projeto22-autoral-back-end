import httpStatus from 'http-status-codes';
import { AuthenticatedRequest } from "@/middlewares/authentication-middleware";
import { NextFunction, Response } from "express";
import relationshipService from '@/services/relationship-service';

export async function getAllNeighbors(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const { userId } = req;

    try {
        const neighbors = await relationshipService.getAll(userId);
        return res.status(httpStatus.OK).send(neighbors);
      } catch (error) {
        next(error);
      }
}

export async function followNeighbor(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const { userId } = req;
    const { followedId } = req.params;

    try {
        await relationshipService.followNeighbor(userId, Number(followedId));
        return res.status(httpStatus.OK);
      } catch (error) {
        next(error);
      }
}
