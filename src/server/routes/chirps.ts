import * as express from 'express';
import { GetChirp, GetChirps, CreateChirp, UpdateChirp, DeleteChirp } from "../utils/chirpstore"

const router = express.Router();

router.get('/:id?', (req: express.Request, res: express.Response) => {
    const id = req.params.id;

    if (id) {
        res.json(GetChirp(id));
    } else {
        const chirps = GetChirps()
        let chirpArr: any[] = []

        Object.keys(chirps).map(key => chirpArr.push({id: key, name: chirps[key].name, message: chirps[key].message}))

        chirpArr.pop()
    
        res.json(chirpArr)
    }
});

router.post('/', (req: express.Request, res: express.Response) => {
    const chirp: {
        name: string,
        message: string
    }= req.body;

    CreateChirp(chirp);

    res.sendStatus(200);
})

router.put('/:id', (req: express.Request, res: express.Response) => {
    const id: string = req.params.id;
    const chirp: {
        name: string,
        message: string
    }= req.body;

    UpdateChirp(id, chirp)

    res.sendStatus(200);
})

router.delete('/:id', (req: express.Request, res: express.Response) => {
    const id = req.params.id;
    DeleteChirp(id)

    res.sendStatus(200);
});


export default router