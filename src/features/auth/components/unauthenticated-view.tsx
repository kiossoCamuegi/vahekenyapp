import { Button } from '@/components/ui/button'
import { Item,ItemMedia,ItemContent, ItemTitle ,ItemDescription, ItemActions} from '@/components/ui/item'
import { SignInButton } from '@clerk/nextjs'
import { ShieldAlertIcon } from 'lucide-react' 

export const UnauthenticatedView = ()=> {
  return (
    <div className='flex items-center justify-center bg-background h-screen'>
        <div className="w-full max-w-lg bg-muted">
            <Item>
               <ItemMedia variant="icon">
                   <ShieldAlertIcon />
               </ItemMedia>
               <ItemContent>
                  <ItemTitle>Unauthorized Access</ItemTitle>
                  <ItemDescription>You are not authorized to access this resource.</ItemDescription>
               </ItemContent>
               <ItemActions>
                  <SignInButton>
                    <Button>Sing in</Button>
                  </SignInButton>
               </ItemActions>
            </Item>
        </div>
    </div>
  )
}

 