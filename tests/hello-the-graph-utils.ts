import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CounterAugmented,
  SetHelloCalled
} from "../generated/HelloTheGraph/HelloTheGraph"

export function createCounterAugmentedEvent(
  counterValue: BigInt
): CounterAugmented {
  let counterAugmentedEvent = changetype<CounterAugmented>(newMockEvent())

  counterAugmentedEvent.parameters = new Array()

  counterAugmentedEvent.parameters.push(
    new ethereum.EventParam(
      "counterValue",
      ethereum.Value.fromUnsignedBigInt(counterValue)
    )
  )

  return counterAugmentedEvent
}

export function createSetHelloCalledEvent(
  message: string,
  sender: Address
): SetHelloCalled {
  let setHelloCalledEvent = changetype<SetHelloCalled>(newMockEvent())

  setHelloCalledEvent.parameters = new Array()

  setHelloCalledEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromString(message))
  )
  setHelloCalledEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return setHelloCalledEvent
}
