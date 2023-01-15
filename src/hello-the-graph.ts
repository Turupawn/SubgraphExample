import {
  CounterAugmented as CounterAugmentedEvent,
  SetHelloCalled as SetHelloCalledEvent
} from "../generated/HelloTheGraph/HelloTheGraph"
import { CounterAugmented, SetHelloCalled } from "../generated/schema"

export function handleCounterAugmented(event: CounterAugmentedEvent): void {
  let entity = new CounterAugmented(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.counterValue = event.params.counterValue

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetHelloCalled(event: SetHelloCalledEvent): void {
  let entity = new SetHelloCalled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.message = event.params.message
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
