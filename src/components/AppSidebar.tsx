import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup, SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem
} from "@/components/ui/sidebar.tsx";
import {ChevronUp, Home, LucideLogOut, Settings} from "lucide-react";
import {useAppSelector} from "@/states";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu.tsx";
import {Avatar} from "@/components/ui/avatar.tsx";
import {AvatarImage} from "@radix-ui/react-avatar";

export default function AppSidebar({onSignOut}: {onSignOut: () => void}) {
    const items = [
        {
            title: 'Home',
            url: '/',
            icon: Home
        },
        {
            title: 'Settings',
            url: '/',
            icon: Settings
        },

    ]

    const authUser = useAppSelector(state => state.auth)

    return (
        <Sidebar variant="floating" collapsible='icon'>
            <SidebarHeader/>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Forum</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {
                                items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <a href={item.url}>
                                                <item.icon/>
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))
                            }
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <Avatar>
                                        <AvatarImage src={authUser.avatar} alt={`@${authUser.id}`}/>
                                        <AvatarFallback>UA</AvatarFallback>
                                    </Avatar>
                                    {authUser.name}
                                    <ChevronUp/>
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    <LucideLogOut/>
                                    <a onClick={onSignOut}>Sign Out</a>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}