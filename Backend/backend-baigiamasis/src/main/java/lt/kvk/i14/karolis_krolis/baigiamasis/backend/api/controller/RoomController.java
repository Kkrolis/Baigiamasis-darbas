package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.controller;

import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity.Room;
import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity.RoomList;
import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.repository.RoomListRepository;
import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.repository.RoomRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/room")
public class RoomController {
    private final RoomRepository roomRepository;
    private final RoomListRepository roomListRepository;

    public RoomController(RoomRepository roomRepository, RoomListRepository roomListRepository) {
        this.roomRepository = roomRepository;
        this.roomListRepository = roomListRepository;
    }

    @PostMapping("/createRoom")
    String createRoom(@RequestBody Room room, @RequestHeader("Authorization") String header){
        roomRepository.save(room);

        RoomList roomList1 = new RoomList();
        roomList1.setRoomId(room);
        roomList1.setUserId(room.getUser1());
        roomListRepository.save(roomList1);

        RoomList roomList2 = new RoomList();
        roomList2.setRoomId(room);
        roomList2.setUserId(room.getUser2());
        roomListRepository.save(roomList2);

        return "OK";
    }

    @GetMapping("/getRoom/{id}")
    public ResponseEntity<Room> findRoomById(@RequestHeader("Authorization") String header, @PathVariable(value = "id") int id){
        Optional<Room> room = roomRepository.findById(id);
        if (room.isPresent()){
            return ResponseEntity.ok().body(room.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
